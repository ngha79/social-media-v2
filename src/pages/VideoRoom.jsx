import React, { useEffect, useRef, useState } from 'react'
import { BsCameraVideo, BsFillTelephoneXFill } from 'react-icons/bs'
import { MdKeyboardVoice } from 'react-icons/md'
import { GoDeviceDesktop } from 'react-icons/go'
import Peer from 'peerjs'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { socket } from '../utils/socket'

const Video = ({ peer }) => {
  const ref = useRef()
  useEffect(() => {
    ref.current.srcObject = peer._remoteStream
  }, [peer])
  return (
    <video
      className="h-[200px] w-max max-w-[300px]"
      ref={ref}
      autoPlay
      height={200}
      controls
    />
  )
}

const VideoRoom = () => {
  const { user } = useSelector((state) => state.auth)
  let myStreamRef = useRef({ srcObject: '' })
  let [remoteStreamRef, setRemoteStreamRef] = useState([])
  const peerRef = useRef(
    new Peer({
      config: {
        iceServers: [{ urls: 'stun:stun.l.google.com:19302' }],
      },
    })
  )
  const navigate = useNavigate()
  const peerIdRef = useRef('')
  const [video, setVideo] = useState(true)
  const [audio, setAudio] = useState(true)
  const params = useParams()
  const conversationId = params.roomId
  const handleToggleVideo = () => {
    myStreamRef.current.srcObject
      .getVideoTracks()
      .forEach((track) => (track.enabled = !track.enabled))
    setVideo(myStreamRef.current.srcObject.getVideoTracks()[0].enabled)
  }

  const handleToggleAudioOn = () => {
    myStreamRef.current.srcObject
      .getAudioTracks()
      .forEach((track) => (track.enabled = true))
    setAudio(true)
  }
  const handleToggleAudioOff = () => {
    myStreamRef.current.srcObject
      .getAudioTracks()
      .forEach((track) => (track.enabled = false))
    setAudio(false)
  }

  const handleOutCallVideo = async () => {
    await myStreamRef?.current?.srcObject.getTracks().forEach(function (track) {
      track.stop()
    })
    socket.emit('user-disconnected send', user?._id, conversationId)
    navigate('/')
    navigate(0)
  }

  const handleShareScreen = () => {
    if (navigator.mediaDevices && navigator.mediaDevices.getDisplayMedia) {
      navigator.mediaDevices
        .getDisplayMedia({ video: true, audio: true })
        .then((stream) => {
          // Kiểm tra xem người dùng đã cho phép chia sẻ màn hình
          if (stream) {
            let videoTrack = stream.getVideoTracks()[0]
            let audioTrack = stream.getAudioTracks()[0]
            remoteStreamRef.forEach((remote) => {
              remote.peerConnection
                .getSenders()
                .find(function (s) {
                  return s.track.kind == videoTrack.kind
                })
                .replaceTrack(videoTrack)
              if (audioTrack) {
                remote.peerConnection
                  .getSenders()
                  .find(function (s) {
                    return s.track.kind == audioTrack.kind
                  })
                  .replaceTrack(audioTrack)
              }
            })
            videoTrack.onended = () => {
              navigator.mediaDevices
                .getUserMedia({ video: true, audio: true })
                .then((newStream) => {
                  myStreamRef.current.srcObject = newStream
                  let newVideoTrack = newStream.getVideoTracks()[0]
                  let newAudioTrack = newStream.getAudioTracks()[0]
                  remoteStreamRef.forEach((remote) => {
                    remote.peerConnection
                      .getSenders()
                      .find(function (s) {
                        return s.track.kind == newVideoTrack.kind
                      })
                      .replaceTrack(newVideoTrack)
                    remote.peerConnection
                      .getSenders()
                      .find(function (s) {
                        return s.track.kind == newAudioTrack.kind
                      })
                      .replaceTrack(newAudioTrack)
                  })
                })
            }
          }
        })
        .catch((error) => {
          console.error('Error accessing screen sharing:', error)
        })
    } else {
      console.error('Browser does not support screen sharing.')
    }
  }
  useEffect(() => {
    if (conversationId && user) {
      peerRef.current.on('open', function (id) {
        peerIdRef.current = id
        socket.emit('subscribe-call-video', {
          conversationId,
          newUserId: user?._id,
          peerId: id,
        })
      })

      peerRef.current.on('call', function (call) {
        let streamTempt = myStreamRef.current.srcObject
        call.answer(streamTempt)
        call.on('stream', function (remoteStream) {
          if (call.peer === peerRef.current.id) return
          let update = remoteStreamRef.filter(
            (remote) => remote.peer !== call.peer
          )
          setRemoteStreamRef([...update, call])
        })
      })

      peerRef.current.on('close', function () {
        let update = remoteStreamRef.filter(
          (remote) => remote.peer !== peerRef.current.id
        )
        setRemoteStreamRef([...update])
        myStreamRef?.current?.srcObject?.getTracks().forEach(function (track) {
          track.stop()
        })
      })
    }

    navigator.mediaDevices
      .getUserMedia({
        video: true,
        audio: true,
      })
      .then((stream) => {
        myStreamRef.current.srcObject = stream
      })

    socket.on(
      'new-user-call',
      async ({ conversationId, newUserId, peerId }) => {
        let streamTempt = await myStreamRef.current.srcObject
        const call = await peerRef.current.call(peerId, streamTempt)
        if (call) {
          call.on('stream', function (remoteStream) {
            if (call.peer === peerRef.current.id) return
            let update = remoteStreamRef.filter(
              (remote) => remote.peer !== call.peer
            )
            setRemoteStreamRef([...update, call])
          })
          call.on('close', function () {
            let update = remoteStreamRef.filter(
              (remote) => remote.peer !== call.peer
            )
            setRemoteStreamRef([...update])
            myStreamRef?.current?.srcObject
              ?.getTracks()
              .forEach(function (track) {
                track.stop()
              })
          })
        }
      }
    )

    socket.on('user-disconnected', async (userId) => {
      await myStreamRef?.current?.srcObject
        ?.getTracks()
        .forEach(function (track) {
          track.stop()
        })
      navigate('/')
      navigate(0)
    })
  }, [user])

  return (
    <div className="w-screen h-screen fixed top-0 right-0 z-100 flex items-center justify-center">
      <div className="max-h-[70%] flex flex-wrap gap-4">
        {remoteStreamRef?.map((stream, i) => (
          <Video
            peer={stream}
            key={i}
          />
        ))}
      </div>
      <div className="absolute bottom-28 right-0 max-w-[250px] max-h-[150px]">
        <video
          ref={myStreamRef}
          autoPlay
          controls
          muted
          className="w-full h-full"
        ></video>
      </div>
      <footer className="fixed bottom-0 left-0 z-[4] w-full bg-blue-100 flex items-center justify-center h-[60px] gap-[40px]">
        <div
          className={`p-2 rounded-full cursor-pointer ${
            video
              ? 'bg-[#2198e7] hover:bg-[#4990c0]'
              : 'bg-[#d43a3a] hover:bg-[#d36262]'
          }`}
          onClick={handleToggleVideo}
        >
          <BsCameraVideo
            size={24}
            className="text-white"
          />
        </div>
        <div
          className={`p-2 rounded-full cursor-pointer ${
            audio
              ? 'bg-[#2198e7] hover:bg-[#4990c0]'
              : 'bg-[#d43a3a] hover:bg-[#d36262]'
          }`}
          onClick={audio ? handleToggleAudioOff : handleToggleAudioOn}
        >
          <MdKeyboardVoice
            size={24}
            className="text-white"
          />
        </div>
        <div
          className="p-2 rounded-full bg-[#2198e7] hover:bg-[#4990c0] cursor-pointer"
          onClick={handleShareScreen}
        >
          <GoDeviceDesktop
            size={24}
            className="text-white"
          />
        </div>
        <div
          className="p-2 rounded-full cursor-pointer bg-[#d43a3a] hover:bg-[#d36262]"
          onClick={handleOutCallVideo}
        >
          <BsFillTelephoneXFill
            size={24}
            className="text-white"
          />
        </div>
      </footer>
    </div>
  )
}

export default VideoRoom
