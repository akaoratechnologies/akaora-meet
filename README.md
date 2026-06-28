# Akaora Meet

Akaora Meet is a no-login browser meeting website for GitHub Pages. It uses Firebase Realtime Database for room metadata, signaling, chat, participants, waiting-room requests, reactions, and feedback. Audio, camera video, screen video, and supported screen audio are sent peer-to-peer with WebRTC.

## Features

- Create and join meeting flows with dynamic room codes.
- Optional microphone and camera before joining.
- Waiting room with host Admit and Deny decisions.
- Host controls for end meeting, lock/unlock, chat enable/disable, guest screen-share enable/disable, and participant removal.
- Firebase-backed participant list with host badge, mic, camera, screen share, and raised-hand status.
- Raise/lower hand with tile badges and live participant list updates.
- Firebase-backed quick reactions with floating sender labels.
- Meeting timer showing current time and meeting duration from room `createdAt`.
- WebRTC audio/video, screen sharing, supported screen audio, and presentation audio toggle.
- Fullscreen support for local, remote, and shared-screen tiles with browser-blocked messaging.
- Live chat with unread badge and popup notification.
- Private meeting notes saved to `localStorage` per room, with save, TXT download, and clear.
- Meeting summary after hangup or host-ended meeting.
- Single pin only: one pinned tile becomes the main focus.
- Dark and light meeting themes, responsive controls, and GitHub Pages compatibility.

## Files

Upload these files to the root of your GitHub Pages repository:

```text
index.html
app.js
styles.css
firebase-config.js
database.rules.json
manifest.webmanifest
.nojekyll
assets/
README.md
```

## Firebase Setup

1. Create or open a Firebase project.
2. Enable Realtime Database.
3. Copy your Firebase web app config into `firebase-config.js`.
4. Paste `database.rules.json` into Realtime Database Rules and publish.

The app writes room data under:

```text
rooms/{roomId}
  status
  locked
  hostId
  hostName
  createdAt
  settings
  chatEnabled
  guestScreenShareEnabled
  participants/{peerId}
  joinRequests/{requestId}
  chat/{messageId}
  reactions/{reactionId}
feedback/{feedbackId}
```

The included rules are intentionally permissive for a no-login public room app. Use stricter authenticated rules before handling private or sensitive meetings.

## GitHub Pages Deployment

1. Commit the files to the repository root.
2. Open GitHub repository settings.
3. Go to Pages.
4. Select `Deploy from branch`.
5. Choose `main` and `/root`.
6. Open the HTTPS Pages URL after deployment finishes.

Do not test camera, microphone, or screen sharing from `file://`. Browsers require HTTPS or localhost for media permissions.

## Browser Limitations

- Screen sharing requires `navigator.mediaDevices.getDisplayMedia`.
- Screen audio depends on browser and selected source. Chrome-based browsers usually support tab audio; system audio varies by OS and source.
- Fullscreen can be blocked by browser policy unless it is triggered by a user gesture.
- Closing a tab cannot guarantee every cleanup write, but Akaora Meet removes participants and pending join requests as much as the browser allows.
- This static WebRTC version is designed around the current peer-to-peer signaling flow. For large multi-party production meetings, use an SFU/media server.

## TURN Server Note

The app currently uses public STUN servers. Some school, office, carrier, or strict NAT networks need TURN relay for reliable WebRTC connection. Add a TURN server in `app.js` under `rtcConfig.iceServers` for production reliability:

```js
{
  urls: "turn:YOUR_TURN_SERVER:3478",
  username: "USERNAME",
  credential: "PASSWORD"
}
```

## Test Two Users Locally

1. Serve the folder from localhost, for example `http://127.0.0.1:4173`.
2. Open the app in one browser tab and create a meeting as host.
3. Copy the meeting link.
4. Open the link in another browser profile, incognito window, or another device on HTTPS/local network.
5. Join as guest, confirm the host sees the waiting-room request, then test Admit and Deny.
6. After admission, test mic, camera, chat, reactions, raise hand, participant list, screen share, lock/unlock, notes, and hangup summary.
