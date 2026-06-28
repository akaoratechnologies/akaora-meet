const $ = (id) => document.getElementById(id);

const ui = {
  views: {
    home: $("homeView"),
    create: $("createView"),
    join: $("joinView"),
    meeting: $("meetingView"),
  },
  appStatus: $("appStatus"),
  themeToggles: [...document.querySelectorAll("[data-theme-toggle]")],
  openCreateBtn: $("openCreateBtn"),
  openJoinBtn: $("openJoinBtn"),
  createNameInput: $("createNameInput"),
  createNowBtn: $("createNowBtn"),
  generatedRoomCode: $("generatedRoomCode"),
  regenerateCodeBtn: $("regenerateCodeBtn"),
  createMicToggle: $("createMicToggle"),
  createCameraToggle: $("createCameraToggle"),
  joinNameInput: $("joinNameInput"),
  roomCodeInput: $("roomCodeInput"),
  joinNowBtn: $("joinNowBtn"),
  invalidRoomAlert: $("invalidRoomAlert"),
  joinMicToggle: $("joinMicToggle"),
  joinCameraToggle: $("joinCameraToggle"),
  activeRoomCode: $("activeRoomCode"),
  hostNameLabel: $("hostNameLabel"),
  copyCodeBtn: $("copyCodeBtn"),
  copyInviteBtn: $("copyInviteBtn"),
  localVideo: $("localVideo"),
  remoteVideo: $("remoteVideo"),
  localPlaceholder: $("localPlaceholder"),
  remotePlaceholder: $("remotePlaceholder"),
  localInitial: $("localInitial"),
  localLabel: $("localLabel"),
  remoteLabel: $("remoteLabel"),
  localMediaState: $("localMediaState"),
  micBtn: $("micBtn"),
  cameraBtn: $("cameraBtn"),
  screenBtn: $("screenBtn"),
  deviceBtn: $("deviceBtn"),
  devicePanel: $("devicePanel"),
  closeDevicePanel: $("closeDevicePanel"),
  micDeviceSelect: $("micDeviceSelect"),
  cameraDeviceSelect: $("cameraDeviceSelect"),
  refreshDevicesBtn: $("refreshDevicesBtn"),
  fullscreenStageBtn: $("fullscreenStageBtn"),
  callStage: $("callStage"),
  videoGrid: $("videoGrid"),
  layoutButtons: [...document.querySelectorAll("[data-layout]")],
  remotePinBtn: $("remotePinBtn"),
  localPinBtn: $("localPinBtn"),
  tileFullscreenButtons: [...document.querySelectorAll("[data-fullscreen-tile]")],
  remoteHandBadge: $("remoteHandBadge"),
  localHandBadge: $("localHandBadge"),
  screenTile: $("screenTile"),
  screenVideo: $("screenVideo"),
  screenPinBtn: $("screenPinBtn"),
  pinButtons: [...document.querySelectorAll("[data-pin-tile]")],
  chatFullscreenBtn: $("chatFullscreenBtn"),
  chatToggleBtn: $("chatToggleBtn"),
  chatUnreadBadge: $("chatUnreadBadge"),
  reactionBtn: $("reactionBtn"),
  reactionPanel: $("reactionPanel"),
  reactionStream: $("reactionStream"),
  chatPopups: $("chatPopups"),
  handBtn: $("handBtn"),
  moreBtn: $("moreBtn"),
  morePanel: $("morePanel"),
  closeMorePanel: $("closeMorePanel"),
  openParticipantsBtn: $("openParticipantsBtn"),
  openNotesBtn: $("openNotesBtn"),
  openReactionsFromMoreBtn: $("openReactionsFromMoreBtn"),
  openFeedbackFromMoreBtn: $("openFeedbackFromMoreBtn"),
  hostControlsPanel: $("hostControlsPanel"),
  lockMeetingBtn: $("lockMeetingBtn"),
  toggleChatHostBtn: $("toggleChatHostBtn"),
  toggleGuestScreenShareBtn: $("toggleGuestScreenShareBtn"),
  endForEveryoneBtn: $("endForEveryoneBtn"),
  viewModeButtons: [...document.querySelectorAll("[data-view-mode]")],
  maxTilesRange: $("maxTilesRange"),
  maxTilesValue: $("maxTilesValue"),
  hideNoVideoToggle: $("hideNoVideoToggle"),
  closeChatBtn: $("closeChatBtn"),
  chatDrawer: $("chatDrawer"),
  chatMessages: $("chatMessages"),
  emojiBtn: $("emojiBtn"),
  emojiRow: $("emojiRow"),
  chatInput: $("chatInput"),
  sendChatBtn: $("sendChatBtn"),
  hangupBtn: $("hangupBtn"),
  meetingClock: $("meetingClock"),
  meetingProfileBadge: $("meetingProfileBadge"),
  inviteCard: $("inviteCard"),
  inviteCardClose: $("inviteCardClose"),
  addOthersBtn: $("addOthersBtn"),
  inviteLinkText: $("inviteLinkText"),
  inviteLinkCopyBtn: $("inviteLinkCopyBtn"),
  inviteCardUser: $("inviteCardUser"),
  waitingRoomCard: $("waitingRoomCard"),
  waitingRequestName: $("waitingRequestName"),
  admitRequestBtn: $("admitRequestBtn"),
  denyRequestBtn: $("denyRequestBtn"),
  participantsPanel: $("participantsPanel"),
  closeParticipantsPanel: $("closeParticipantsPanel"),
  participantsList: $("participantsList"),
  participantPanelSubtitle: $("participantPanelSubtitle"),
  notesPanel: $("notesPanel"),
  closeNotesPanel: $("closeNotesPanel"),
  notesInput: $("notesInput"),
  saveNotesBtn: $("saveNotesBtn"),
  downloadNotesBtn: $("downloadNotesBtn"),
  clearNotesBtn: $("clearNotesBtn"),
  notesStatus: $("notesStatus"),
  presentationHud: $("presentationHud"),
  presenterPillText: $("presenterPillText"),
  presentationAudioPill: $("presentationAudioPill"),
  presentationAudioState: $("presentationAudioState"),
  stopPresentingBtn: $("stopPresentingBtn"),
  toast: $("toast"),
  meetingEndedModal: $("meetingEndedModal"),
  closeMeetingEndedModal: $("closeMeetingEndedModal"),
  submitFeedbackBtn: $("submitFeedbackBtn"),
  skipFeedbackBtn: $("skipFeedbackBtn"),
  feedbackInput: $("feedbackInput"),
  meetingSummaryBlock: $("meetingSummaryBlock"),
  meetingSummaryList: $("meetingSummaryList"),
  copySummaryBtn: $("copySummaryBtn"),
  feedbackRatingButtons: [...document.querySelectorAll(".rating-btn")],
  dynamicStatus: $("dynamicStatus"),
  dynamicStatusText: $("dynamicStatusText"),
};

const state = {
  firebaseApp: null,
  db: null,
  peerId: makeId(14),
  roomId: null,
  role: null,
  displayName: "Guest",
  hostName: "---",
  roomRef: null,
  pc: null,
  localStream: new MediaStream(),
  remoteStream: new MediaStream(),
  currentVideoTrack: null,
  currentAudioTrack: null,
  localScreenTrack: null,
  localScreenAudioTrack: null,
  localScreenStream: null,
  remoteScreenStream: new MediaStream(),
  hasRemoteParticipant: false,
  remoteParticipant: null,
  participants: {},
  handRaised: false,
  roomLocked: false,
  chatEnabled: true,
  guestScreenShareEnabled: true,
  pendingJoinRequests: [],
  activeJoinRequest: null,
  joinRequestId: null,
  waitingForAdmission: false,
  joiningAfterAdmit: false,
  endingLocally: false,
  meetingStartedAt: null,
  chatMessageCount: 0,
  participantIdsSeen: new Set(),
  screenShareUsed: false,
  activeLayout: "auto",
  viewSettings: {
    mode: "auto",
    maxTiles: 3,
    hideNoVideo: false,
  },
  pinnedTiles: [],
  selectedAudioDeviceId: "",
  selectedVideoDeviceId: "",
  queuedCandidates: [],
  listeners: [],
  chatKeys: new Set(),
  reactionKeys: new Set(),
  unreadChatCount: 0,
  generatedCode: "",
  dynamicStatusTimer: null,
  feedbackRating: 0,
  lastMeetingSummary: null,
  meetingClockTimer: null,
  inviteCardShownForRoom: null,
};

const rtcConfig = {
  iceServers: [
    { urls: ["stun:stun.l.google.com:19302", "stun:stun1.l.google.com:19302"] },
    // Add TURN here for stronger real-world connection success:
    // { urls: "turn:YOUR_TURN_SERVER:3478", username: "USERNAME", credential: "PASSWORD" }
  ],
};

const viewSettingsKey = "akaora-meet-view-settings";
const reactionMap = {
  heart: { codepoints: [0x1f496], label: "Heart" },
  thumbsUp: { codepoints: [0x1f44d], label: "Thumbs up" },
  party: { codepoints: [0x1f389], label: "Celebration" },
  clap: { codepoints: [0x1f44f], label: "Clap" },
  laugh: { codepoints: [0x1f602], label: "Laugh" },
  check: { codepoints: [0x2705], label: "Check" },
  wow: { codepoints: [0x1f62e], label: "Wow" },
  sad: { codepoints: [0x1f622], label: "Sad" },
  think: { codepoints: [0x1f914], label: "Thinking" },
  thumbsDown: { codepoints: [0x1f44e], label: "Thumbs down" },
};

boot();

function boot() {
  initTheme();
  loadViewSettings();
  document.body.dataset.view = "home";
  ui.invalidRoomAlert.hidden = true;
  bindEvents();
  createFreshCode();

  try {
    if (!window.firebase) {
      setAppStatus("Firebase SDK not loaded", "error");
      toast("Firebase SDK could not load. Check internet connection.", "error");
      return;
    }

    const config = window.AKAORA_FIREBASE_CONFIG;
    if (!config || !config.apiKey || !config.databaseURL) {
      setAppStatus("Firebase config missing", "error");
      toast("Firebase config is missing in firebase-config.js", "error");
      return;
    }

    state.firebaseApp = firebase.apps.length ? firebase.app() : firebase.initializeApp(config);
    state.db = firebase.database(state.firebaseApp);
    setAppStatus("Ready", "ready");
  } catch (error) {
    console.error(error);
    state.waitingForAdmission = false;
    state.joiningAfterAdmit = false;
    setAppStatus("Firebase error", "error");
    toast(error.message || "Firebase initialization failed.", "error");
  }

  populateDeviceLists(false);
  applyRoomFromUrl();
}

function bindEvents() {
  ui.themeToggles.forEach((button) => button.addEventListener("click", toggleTheme));
  ui.openCreateBtn.addEventListener("click", openCreateFlow);
  ui.openJoinBtn.addEventListener("click", openJoinFlow);
  document.querySelectorAll("[data-back-home]").forEach((button) => button.addEventListener("click", goHome));

  ui.createNameInput.addEventListener("input", updateCreateButtonState);
  ui.joinNameInput.addEventListener("input", updateJoinButtonState);
  ui.roomCodeInput.addEventListener("input", () => {
    ui.invalidRoomAlert.hidden = true;
    updateJoinButtonState();
  });

  ui.regenerateCodeBtn.addEventListener("click", createFreshCode);
  ui.createNowBtn.addEventListener("click", createMeetingNow);
  ui.joinNowBtn.addEventListener("click", joinMeetingNow);

  bindToggle(ui.createMicToggle, "Mic");
  bindToggle(ui.createCameraToggle, "Camera");
  bindToggle(ui.joinMicToggle, "Mic");
  bindToggle(ui.joinCameraToggle, "Camera");

  ui.copyCodeBtn.addEventListener("click", () => copyText(state.roomId || "", "Room code copied"));
  ui.copyInviteBtn.addEventListener("click", () => copyText(buildInviteLink(), "Invite link copied"));
  ui.micBtn.addEventListener("click", toggleMicDuringCall);
  ui.cameraBtn.addEventListener("click", toggleCameraDuringCall);
  ui.screenBtn.addEventListener("click", toggleScreenShare);
  ui.layoutButtons?.forEach((button) => button.addEventListener("click", () => setVideoLayout(button.dataset.layout || "auto")));
  ui.moreBtn?.addEventListener("click", () => toggleMorePanel());
  ui.closeMorePanel?.addEventListener("click", () => toggleMorePanel(false));
  ui.openParticipantsBtn?.addEventListener("click", () => openParticipantsPanel());
  ui.openNotesBtn?.addEventListener("click", () => openNotesPanel());
  ui.openReactionsFromMoreBtn?.addEventListener("click", () => {
    toggleMorePanel(false);
    toggleReactionPanel(true);
  });
  ui.openFeedbackFromMoreBtn?.addEventListener("click", () => {
    toggleMorePanel(false);
    openFeedbackModal();
  });
  ui.lockMeetingBtn?.addEventListener("click", toggleMeetingLock);
  ui.toggleChatHostBtn?.addEventListener("click", toggleChatSetting);
  ui.toggleGuestScreenShareBtn?.addEventListener("click", toggleGuestScreenShareSetting);
  ui.endForEveryoneBtn?.addEventListener("click", endMeetingForEveryone);
  ui.viewModeButtons?.forEach((button) => button.addEventListener("click", () => setVideoLayout(button.dataset.viewMode || "auto", true)));
  ui.maxTilesRange?.addEventListener("input", () => setMaxTiles(ui.maxTilesRange.value, true));
  ui.hideNoVideoToggle?.addEventListener("change", () => setHideTilesWithoutVideo(ui.hideNoVideoToggle.checked, true));
  ui.deviceBtn?.addEventListener("click", () => toggleDevicePanel(true));
  ui.closeDevicePanel?.addEventListener("click", () => toggleDevicePanel(false));
  ui.refreshDevicesBtn?.addEventListener("click", () => populateDeviceLists(true));
  ui.micDeviceSelect?.addEventListener("change", async () => {
    state.selectedAudioDeviceId = ui.micDeviceSelect.value;
    await switchAudioDevice();
  });
  ui.cameraDeviceSelect?.addEventListener("change", async () => {
    state.selectedVideoDeviceId = ui.cameraDeviceSelect.value;
    await switchVideoDevice();
  });
  ui.fullscreenStageBtn?.addEventListener("click", () => requestFullscreenFor(ui.callStage, "Meeting full screen"));
  ui.pinButtons?.forEach((button) => button.addEventListener("click", () => setPinnedTile(button.dataset.pinTile)));
  ui.tileFullscreenButtons?.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      requestTileFullscreen(button.dataset.fullscreenTile);
    });
  });
  document.querySelectorAll(".video-tile").forEach((tile) => {
    tile.addEventListener("click", (event) => {
      if (event.target.closest("button, a, input, select, textarea, .tile-badge")) return;
      const tileName = getTileName(tile);
      if (tileName) setPinnedTile(tileName, true);
    });
  });
  ui.chatFullscreenBtn?.addEventListener("click", () => requestFullscreenFor(ui.chatDrawer, "Chat full screen"));
  ui.hangupBtn.addEventListener("click", leaveMeeting);

  ui.chatToggleBtn.addEventListener("click", openChatDrawer);
  ui.closeChatBtn.addEventListener("click", () => ui.chatDrawer.classList.remove("open"));
  ui.reactionBtn?.addEventListener("click", () => toggleReactionPanel());
  ui.reactionPanel?.querySelectorAll("[data-reaction]").forEach((button) => {
    button.addEventListener("click", () => sendReaction(button.dataset.reaction));
  });
  ui.handBtn?.addEventListener("click", toggleRaiseHand);
  ui.emojiBtn.addEventListener("click", () => {
    ui.emojiRow.hidden = !ui.emojiRow.hidden;
  });
  ui.emojiRow.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      ui.chatInput.value += button.textContent;
      ui.chatInput.focus();
    });
  });
  ui.sendChatBtn.addEventListener("click", sendChatMessage);
  ui.chatInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") sendChatMessage();
  });

  ui.inviteCardClose?.addEventListener("click", hideInviteCard);
  ui.inviteLinkCopyBtn?.addEventListener("click", () => copyText(buildInviteLink(), "Invite link copied"));
  ui.addOthersBtn?.addEventListener("click", shareOrCopyInvite);
  ui.admitRequestBtn?.addEventListener("click", () => respondToJoinRequest("admitted"));
  ui.denyRequestBtn?.addEventListener("click", () => respondToJoinRequest("denied"));
  ui.closeParticipantsPanel?.addEventListener("click", () => toggleParticipantsPanel(false));
  ui.closeNotesPanel?.addEventListener("click", () => toggleNotesPanel(false));
  ui.saveNotesBtn?.addEventListener("click", saveMeetingNotes);
  ui.downloadNotesBtn?.addEventListener("click", downloadMeetingNotes);
  ui.clearNotesBtn?.addEventListener("click", clearMeetingNotes);
  ui.stopPresentingBtn?.addEventListener("click", () => stopScreenShare(true));
  ui.presentationAudioPill?.addEventListener("click", togglePresentationAudio);

  ui.closeMeetingEndedModal?.addEventListener("click", closeFeedbackModal);
  ui.skipFeedbackBtn?.addEventListener("click", closeFeedbackModal);
  ui.submitFeedbackBtn?.addEventListener("click", submitFeedback);
  ui.copySummaryBtn?.addEventListener("click", copyMeetingSummary);
  ui.feedbackRatingButtons?.forEach((button) => button.addEventListener("click", () => setFeedbackRating(Number(button.dataset.rating || 0))));
  ui.meetingEndedModal?.addEventListener("click", (event) => {
    if (event.target === ui.meetingEndedModal) closeFeedbackModal();
  });
  document.addEventListener("click", (event) => {
    if (!ui.reactionPanel?.hidden && !event.target.closest("#reactionPanel, #reactionBtn")) {
      toggleReactionPanel(false);
    }
    if (ui.morePanel?.hidden) return;
    if (event.target.closest("#morePanel, #moreBtn")) return;
    toggleMorePanel(false);
  });
}


function bindToggle(button, label) {
  button.addEventListener("click", () => {
    const enabled = button.dataset.enabled !== "true";
    button.dataset.enabled = String(enabled);
    button.querySelector("span").textContent = `${label} ${enabled ? "on" : "off"}`;
    setAppStatus(`${label} ${enabled ? "ready to start" : "will stay off"}`, "ready");
  });
}


function initTheme() {
  const savedTheme = localStorage.getItem("akaora-meet-theme");
  const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  setTheme(savedTheme || (prefersDark ? "dark" : "light"), false);
}

function toggleTheme() {
  const nextTheme = document.body.dataset.theme === "dark" ? "light" : "dark";
  setTheme(nextTheme, true);
}

function setTheme(theme, announce = true) {
  const normalizedTheme = theme === "dark" ? "dark" : "light";
  document.body.dataset.theme = normalizedTheme;
  localStorage.setItem("akaora-meet-theme", normalizedTheme);

  const metaTheme = document.querySelector('meta[name="theme-color"]');
  if (metaTheme) metaTheme.setAttribute("content", normalizedTheme === "dark" ? "#061326" : "#f8fbff");

  const label = normalizedTheme === "dark" ? "Light" : "Dark";
  ui.themeToggles.forEach((button) => {
    button.setAttribute("aria-label", `Switch to ${label.toLowerCase()} mode`);
    const span = button.querySelector("span");
    if (span) span.textContent = label;
  });

  if (announce) {
    setAppStatus(`${normalizedTheme === "dark" ? "Dark" : "Light"} mode enabled`, "ready");
  }
}

function loadViewSettings() {
  try {
    const saved = JSON.parse(localStorage.getItem(viewSettingsKey) || "{}");
    state.viewSettings = {
      mode: normalizeViewMode(saved.mode || state.viewSettings.mode),
      maxTiles: clampNumber(saved.maxTiles, 1, 3, state.viewSettings.maxTiles),
      hideNoVideo: Boolean(saved.hideNoVideo),
    };
  } catch (_) {
    state.viewSettings = { mode: "auto", maxTiles: 3, hideNoVideo: false };
  }
  state.activeLayout = state.viewSettings.mode;
  syncViewSettingsControls();
}

function saveViewSettings() {
  try {
    localStorage.setItem(viewSettingsKey, JSON.stringify(state.viewSettings));
  } catch (_) {}
}

function syncViewSettingsControls() {
  const mode = normalizeViewMode(state.viewSettings.mode);
  ui.viewModeButtons?.forEach((button) => {
    const active = button.dataset.viewMode === mode;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  if (ui.maxTilesRange) ui.maxTilesRange.value = String(state.viewSettings.maxTiles);
  if (ui.maxTilesValue) ui.maxTilesValue.textContent = String(state.viewSettings.maxTiles);
  if (ui.hideNoVideoToggle) ui.hideNoVideoToggle.checked = Boolean(state.viewSettings.hideNoVideo);
  if (ui.videoGrid) {
    ui.videoGrid.dataset.layout = mode;
    ui.videoGrid.dataset.maxTiles = String(state.viewSettings.maxTiles);
  }
}

function normalizeViewMode(mode) {
  const aliases = { split: "tiled", focus: "spotlight" };
  const normalized = aliases[mode] || mode;
  return ["auto", "tiled", "spotlight", "sidebar"].includes(normalized) ? normalized : "auto";
}

function clampNumber(value, min, max, fallback) {
  const number = Number(value);
  if (!Number.isFinite(number)) return fallback;
  return Math.max(min, Math.min(max, Math.round(number)));
}

function showView(name) {
  document.body.dataset.view = name;
  Object.values(ui.views).forEach((view) => view.classList.remove("active"));
  ui.views[name].classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function openCreateFlow() {
  ui.invalidRoomAlert.hidden = true;
  createFreshCode();
  showView("create");
  setAppStatus("Ready to create meeting", "ready");
  setTimeout(() => ui.createNameInput.focus(), 120);
}

function openJoinFlow() {
  ui.invalidRoomAlert.hidden = true;
  showView("join");
  setAppStatus("Ready to join meeting", "ready");
  setTimeout(() => (ui.roomCodeInput.value ? ui.joinNameInput.focus() : ui.roomCodeInput.focus()), 120);
}

function goHome() {
  const url = new URL(window.location.href);
  url.searchParams.delete("room");
  history.replaceState({}, "", url.toString());
  ui.invalidRoomAlert.hidden = true;
  showView("home");
  setAppStatus("Ready", "ready");
}

function updateCreateButtonState() {
  ui.createNowBtn.disabled = ui.createNameInput.value.trim().length < 2 || !state.db;
}

function updateJoinButtonState() {
  const hasName = ui.joinNameInput.value.trim().length >= 2;
  const hasRoom = parseRoomId(ui.roomCodeInput.value).length >= 6;
  ui.joinNowBtn.disabled = !state.db || !hasName || !hasRoom;
}

function createFreshCode() {
  state.generatedCode = makeRoomCode();
  ui.generatedRoomCode.textContent = state.generatedCode;
  if (ui.dynamicStatus) setAppStatus("New room code ready", "ready");
}

function applyRoomFromUrl() {
  ui.invalidRoomAlert.hidden = true;
  const params = new URLSearchParams(window.location.search);
  const room = parseRoomId(params.get("room") || "");
  if (room) {
    ui.roomCodeInput.value = room;
    updateJoinButtonState();
    showView("join");
  }
}

async function createMeetingNow() {
  if (!state.db) return toast("Firebase is not ready yet.", "error");
  if (ui.createNameInput.value.trim().length < 2) return;

  ui.createNowBtn.disabled = true;
  ui.createNowBtn.innerHTML = loadingIcon("Creating...");
  setAppStatus("Creating meeting...", "loading");

  state.role = "host";
  state.roomId = state.generatedCode || makeRoomCode();
  state.displayName = ui.createNameInput.value.trim().slice(0, 32);
  state.hostName = state.displayName;
  state.roomRef = state.db.ref(`rooms/${state.roomId}`);
  state.roomLocked = false;
  state.chatEnabled = true;
  state.guestScreenShareEnabled = true;
  state.pendingJoinRequests = [];
  state.participants = {};
  state.participantIdsSeen = new Set([state.peerId]);
  state.chatMessageCount = 0;
  state.screenShareUsed = false;
  state.meetingStartedAt = Date.now();

  try {
    setAppStatus("Preparing mic/camera...", "loading");
    await prepareInitialMedia(isToggleOn(ui.createMicToggle), isToggleOn(ui.createCameraToggle));

    setAppStatus("Saving room to Firebase...", "loading");
    // Create the room path before WebRTC starts producing ICE candidates.
    // This avoids early candidates being overwritten by a later roomRef.set().
    await state.roomRef.set({
      status: "creating",
      createdAt: firebase.database.ServerValue.TIMESTAMP,
      updatedAt: firebase.database.ServerValue.TIMESTAMP,
      createdBy: state.peerId,
      hostId: state.peerId,
      hostName: state.displayName,
      locked: false,
      chatEnabled: true,
      guestScreenShareEnabled: true,
      settings: {
        chatEnabled: true,
        guestScreenShareEnabled: true,
      },
      participants: {
        [state.peerId]: participantPayload("host"),
      },
      joinRequests: null,
    });

    setAppStatus("Opening call screen...", "loading");
    enterMeetingScreen();
    setupPeerConnection("host");
    await applyLocalTracksToSenders();

    state.pc.onicecandidate = (event) => {
      if (event.candidate && state.roomRef) {
        state.roomRef.child("callerCandidates").push(event.candidate.toJSON()).catch(console.warn);
      }
    };

    setAppStatus("Creating secure connection...", "loading");
    const offer = await state.pc.createOffer({ offerToReceiveAudio: true, offerToReceiveVideo: true });
    await state.pc.setLocalDescription(offer);

    await state.roomRef.update({
      status: "waiting",
      updatedAt: firebase.database.ServerValue.TIMESTAMP,
      offer: { type: offer.type, sdp: offer.sdp },
    });

    listenForAnswer();
    listenForCandidates("calleeCandidates");
    listenForRoomState();
    listenForParticipants();
    listenForJoinRequests();
    setupFirebaseChat();
    setupFirebaseReactions();
    setAppStatus("Ready • Room created", "ready");
    toast("Meeting created. Share the link or room code from the call screen.");
  } catch (error) {
    console.error(error);
    await safeCleanupAfterFailedStart();
    setAppStatus("Failed • Could not create", "error");
    toast(error.message || "Could not create meeting. Check Firebase rules.", "error");
    showView("create");
  } finally {
    ui.createNowBtn.innerHTML = `<svg viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>Create Meeting Now`;
    updateCreateButtonState();
  }
}

async function joinMeetingNow() {
  if (!state.db) return toast("Firebase is not ready yet.", "error");
  const room = parseRoomId(ui.roomCodeInput.value);
  if (!room || room.length < 6) return showInvalidRoom();
  if (ui.joinNameInput.value.trim().length < 2) return;

  ui.joinNowBtn.disabled = true;
  ui.joinNowBtn.innerHTML = loadingIcon("Checking room...");
  ui.invalidRoomAlert.hidden = true;
  setAppStatus("Checking room...", "loading");

  try {
    const roomRef = state.db.ref(`rooms/${room}`);
    const snapshot = await roomRef.once("value");
    const data = snapshot.val();

    if (!data || !data.offer || data.status === "ended") {
      showInvalidRoom();
      return;
    }

    if (data.locked) {
      showJoinNotice("Meeting locked", "This meeting is locked. Ask the host to unlock it.");
      setAppStatus("Meeting locked", "error");
      toast("This meeting is locked. Ask the host to unlock it.", "error");
      return;
    }

    state.role = "guest";
    state.roomId = room;
    state.displayName = ui.joinNameInput.value.trim().slice(0, 32);
    state.hostName = data.hostName || "Host";
    state.roomRef = roomRef;
    state.joiningAfterAdmit = false;
    state.waitingForAdmission = false;

    await requestToJoinRoom(roomRef);
  } catch (error) {
    console.error(error);
    state.waitingForAdmission = false;
    state.joiningAfterAdmit = false;
    setAppStatus("Failed • Could not join", "error");
    toast(error.message || "Could not join meeting. Check room code and Firebase rules.", "error");
    showView("join");
  } finally {
    if (!state.joiningAfterAdmit && !state.waitingForAdmission && document.body.dataset.view !== "meeting") {
      ui.joinNowBtn.innerHTML = `<svg viewBox="0 0 24 24"><path d="M9 18l6-6-6-6"/><path d="M3 12h12"/></svg>Join Meeting Now`;
      updateJoinButtonState();
    }
  }
}

async function requestToJoinRoom(roomRef) {
  const requestRef = roomRef.child("joinRequests").push();
  state.joinRequestId = requestRef.key;
  state.waitingForAdmission = true;
  await requestRef.set({
    peerId: state.peerId,
    name: state.displayName,
    status: "pending",
    createdAt: firebase.database.ServerValue.TIMESTAMP,
  });
  requestRef.onDisconnect?.().remove?.();

  showJoinNotice("Waiting for host", "Your request was sent. You will enter when the host admits you.");
  setAppStatus("Waiting for host approval...", "loading");
  ui.joinNowBtn.innerHTML = loadingIcon("Waiting for host...");
  ui.joinNowBtn.disabled = true;

  const callback = async (snapshot) => {
    const request = snapshot.val();
    if (!request) return;

    if (request.status === "denied") {
      state.waitingForAdmission = false;
      requestRef.off("value", callback);
      showJoinNotice("Request denied", "The host denied your request to join.");
      setAppStatus("Request denied", "error");
      toast("The host denied your request to join.", "error");
      ui.joinNowBtn.innerHTML = `<svg viewBox="0 0 24 24"><path d="M9 18l6-6-6-6"/><path d="M3 12h12"/></svg>Join Meeting Now`;
      updateJoinButtonState();
      return;
    }

    if (request.status !== "admitted" || state.joiningAfterAdmit) return;
    state.joiningAfterAdmit = true;
    state.waitingForAdmission = false;
    requestRef.off("value", callback);
    ui.joinNowBtn.innerHTML = loadingIcon("Joining...");
    setAppStatus("Admitted - joining...", "loading");

    try {
      const freshRoom = await roomRef.once("value");
      await completeGuestJoin(roomRef, freshRoom.val() || {});
      await requestRef.update({
        status: "joined",
        joinedAt: firebase.database.ServerValue.TIMESTAMP,
      }).catch(() => {});
    } catch (error) {
      console.error(error);
      state.joiningAfterAdmit = false;
      state.waitingForAdmission = false;
      setAppStatus("Failed - Could not join", "error");
      toast(error.message || "Could not join after admission.", "error");
      ui.joinNowBtn.innerHTML = `<svg viewBox="0 0 24 24"><path d="M9 18l6-6-6-6"/><path d="M3 12h12"/></svg>Join Meeting Now`;
      updateJoinButtonState();
    }
  };

  requestRef.on("value", callback);
  state.listeners.push(() => requestRef.off("value", callback));
}

async function completeGuestJoin(roomRef, data) {
  if (!data || !data.offer || data.status === "ended") {
    throw new Error("This meeting is no longer available.");
  }
  if (data.locked) {
    showJoinNotice("Meeting locked", "This meeting is locked. Ask the host to unlock it.");
    throw new Error("This meeting is locked. Ask the host to unlock it.");
  }

  state.roomRef = roomRef;
  state.hostName = data.hostName || state.hostName || "Host";
  state.roomLocked = Boolean(data.locked);
  state.chatEnabled = data.chatEnabled !== false && data.settings?.chatEnabled !== false;
  state.guestScreenShareEnabled = data.guestScreenShareEnabled !== false && data.settings?.guestScreenShareEnabled !== false;
  state.meetingStartedAt = normalizeTimestamp(data.createdAt) || Date.now();
  state.participantIdsSeen = new Set([state.peerId]);
  state.chatMessageCount = 0;
  state.screenShareUsed = false;

  setAppStatus("Joining meeting...", "loading");
  await prepareInitialMedia(isToggleOn(ui.joinMicToggle), isToggleOn(ui.joinCameraToggle));
  setAppStatus("Opening call screen...", "loading");
  enterMeetingScreen();
  setupPeerConnection("guest");

  state.pc.onicecandidate = (event) => {
    if (event.candidate && state.roomRef) {
      state.roomRef.child("calleeCandidates").push(event.candidate.toJSON()).catch(console.warn);
    }
  };

  setAppStatus("Connecting to host...", "loading");
  await state.pc.setRemoteDescription(new RTCSessionDescription(data.offer));
  await applyLocalTracksToSenders();
  await flushCandidateQueue();

  const answer = await state.pc.createAnswer();
  await state.pc.setLocalDescription(answer);

  await state.roomRef.update({
    status: "active",
    updatedAt: firebase.database.ServerValue.TIMESTAMP,
    answer: { type: answer.type, sdp: answer.sdp },
  });
  await state.roomRef.child(`participants/${state.peerId}`).set(participantPayload("guest"));

  listenForCandidates("callerCandidates");
  listenForRoomState();
  listenForParticipants();
  setupFirebaseChat();
  setupFirebaseReactions();
  setAppStatus("Connected to room", "connected");
  toast("Joined meeting successfully.");
}

function showInvalidRoom() {
  ui.invalidRoomAlert.hidden = false;
  const title = ui.invalidRoomAlert.querySelector("strong");
  const body = ui.invalidRoomAlert.querySelector("span");
  if (title) title.textContent = "Invalid Room Code";
  if (body) body.textContent = "The room code you entered is invalid. Please check the room code and try again.";
  setAppStatus("Failed • Invalid room code", "error");
  toast("Invalid Room Code — please check the room code and try again.", "error");
}

function showJoinNotice(titleText, bodyText) {
  const title = ui.invalidRoomAlert?.querySelector("strong");
  const body = ui.invalidRoomAlert?.querySelector("span");
  if (title) title.textContent = titleText;
  if (body) body.textContent = bodyText;
  if (ui.invalidRoomAlert) ui.invalidRoomAlert.hidden = false;
}

async function prepareInitialMedia(wantsAudio, wantsVideo) {
  stopLocalMedia();
  state.localStream = new MediaStream();
  state.currentAudioTrack = null;
  state.currentVideoTrack = null;
  ui.localVideo.srcObject = state.localStream;

  if (!wantsAudio && !wantsVideo) {
    updateLocalMediaUI();
    return;
  }

  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: wantsAudio ? audioConstraints() : false,
      video: wantsVideo ? videoConstraints() : false,
    });
    stream.getTracks().forEach((track) => state.localStream.addTrack(track));
    state.currentAudioTrack = stream.getAudioTracks()[0] || null;
    state.currentVideoTrack = stream.getVideoTracks()[0] || null;
    ui.localVideo.srcObject = state.localStream;
  } catch (error) {
    console.warn(error);
    setAppStatus("Media blocked • continuing", "error");
    toast("Camera/mic permission was blocked. Entering without media.", "error");
  } finally {
    updateLocalMediaUI();
    populateDeviceLists(false);
  }
}

function setupPeerConnection(mode) {
  state.remoteStream = new MediaStream();
  ui.remoteVideo.srcObject = state.remoteStream;
  ui.remotePlaceholder.classList.remove("hidden");
  updateRemoteTileVisibility(false);
  state.queuedCandidates = [];

  state.pc = new RTCPeerConnection(rtcConfig);

  state.pc.ontrack = (event) => {
    const track = event.track;
    if (!track) return;

    if (track.kind === "audio") {
      state.hasRemoteParticipant = true;
      updateRemoteTileVisibility(true);
      if (!state.remoteStream.getTracks().some((existing) => existing.id === track.id)) {
        state.remoteStream.addTrack(track);
      }
      ui.remoteVideo.srcObject = state.remoteStream;
      return;
    }

    if (track.kind === "video") {
      state.hasRemoteParticipant = true;
      updateRemoteTileVisibility(true);
      const existingCameraVideos = state.remoteStream.getVideoTracks().length;
      if (existingCameraVideos === 0) {
        state.remoteStream.addTrack(track);
        ui.remoteVideo.srcObject = state.remoteStream;
        ui.remotePlaceholder.classList.add("hidden");
        track.onmute = () => ui.remotePlaceholder.classList.remove("hidden");
        track.onunmute = () => ui.remotePlaceholder.classList.add("hidden");
      } else {
        const showRemoteScreen = () => {
          state.screenShareUsed = true;
          state.remoteScreenStream = new MediaStream([track]);
          setPinnedTile(null, false);
          ui.screenVideo.srcObject = state.remoteScreenStream;
          ui.screenTile.hidden = false;
          ui.screenTile.dataset.source = "remote";
          const badge = ui.screenTile.querySelector(".tile-badge span");
          if (badge) badge.textContent = "Remote screen";
          updateVideoGridLayout();
        };
        const hideRemoteScreen = () => {
          if (ui.screenTile.dataset.source === "remote") {
            ui.screenTile.hidden = true;
            ui.screenVideo.srcObject = null;
            ui.screenTile.dataset.source = "";
            updateVideoGridLayout();
          }
        };
        track.onunmute = showRemoteScreen;
        track.onmute = hideRemoteScreen;
        track.onended = hideRemoteScreen;
        if (!track.muted) showRemoteScreen();
      }
      updateVideoGridLayout();
    }
  };

  state.pc.onconnectionstatechange = () => {
    const connectionState = state.pc?.connectionState || "unknown";
    if (connectionState === "connected") {
      setAppStatus("Connected • Peer ready", "connected");
      toast("Peer connected.");
    } else if (["failed", "disconnected"].includes(connectionState)) {
      setAppStatus(`Failed • ${connectionState}`, "error");
      toast("Peer connection is unstable. A TURN server may be needed on this network.", "error");
    } else if (connectionState !== "closed") {
      setAppStatus(`${connectionState.charAt(0).toUpperCase() + connectionState.slice(1)}...`, "loading");
    }
  };

  state.pc.oniceconnectionstatechange = () => {
    const iceState = state.pc?.iceConnectionState;
    if (iceState === "failed") {
      setAppStatus("Failed • ICE connection", "error");
      toast("WebRTC ICE failed. Add a TURN server for strict networks.", "error");
    }
  };

  if (mode === "host") {
    // The host creates media sections up front, so mic/camera can be turned on later without forcing permission at startup.
    createOfferTransceivers();
  }
}

function createOfferTransceivers() {
  if (!state.pc) return;
  const audioCount = state.pc.getTransceivers().filter((t) => t.receiver?.track?.kind === "audio" || t.sender?.track?.kind === "audio").length;
  const videoCount = state.pc.getTransceivers().filter((t) => t.receiver?.track?.kind === "video" || t.sender?.track?.kind === "video").length;
  for (let i = audioCount; i < 2; i += 1) state.pc.addTransceiver("audio", { direction: "sendrecv" });
  for (let i = videoCount; i < 2; i += 1) state.pc.addTransceiver("video", { direction: "sendrecv" });
}

async function applyLocalTracksToSenders() {
  if (!state.pc) return;
  const audioSender = findSender("audio", 0);
  const videoSender = findSender("video", 0);
  const screenAudioSender = findSender("audio", 1);
  const screenVideoSender = findSender("video", 1);

  if (audioSender) await audioSender.replaceTrack(state.currentAudioTrack || null);
  if (videoSender) await videoSender.replaceTrack(state.currentVideoTrack || null);
  if (screenAudioSender) await screenAudioSender.replaceTrack(state.localScreenAudioTrack || null);
  if (screenVideoSender) await screenVideoSender.replaceTrack(state.localScreenTrack || null);
}

function findSender(kind, index = 0) {
  const matches = state.pc?.getTransceivers().filter((t) => t.receiver?.track?.kind === kind || t.sender?.track?.kind === kind) || [];
  if (matches[index]?.sender) return matches[index].sender;
  const senders = state.pc?.getSenders().filter((sender) => sender.track?.kind === kind) || [];
  return senders[index] || null;
}

function listenForAnswer() {
  if (!state.roomRef) return;
  const ref = state.roomRef.child("answer");
  const callback = async (snapshot) => {
    const answer = snapshot.val();
    if (!answer || !state.pc || state.pc.currentRemoteDescription) return;
    try {
      await state.pc.setRemoteDescription(new RTCSessionDescription(answer));
      await flushCandidateQueue();
      await state.roomRef.update({ status: "active", updatedAt: firebase.database.ServerValue.TIMESTAMP });
      setAppStatus("Connecting peer...", "loading");
    } catch (error) {
      console.warn(error);
    }
  };
  ref.on("value", callback);
  state.listeners.push(() => ref.off("value", callback));
}

function listenForCandidates(pathName) {
  if (!state.roomRef) return;
  const ref = state.roomRef.child(pathName);
  const callback = (snapshot) => {
    const candidate = snapshot.val();
    if (candidate) addRemoteCandidate(candidate);
  };
  ref.on("child_added", callback);
  state.listeners.push(() => ref.off("child_added", callback));
}

async function addRemoteCandidate(candidate) {
  if (!state.pc) return;
  if (!state.pc.remoteDescription) {
    state.queuedCandidates.push(candidate);
    return;
  }
  try {
    await state.pc.addIceCandidate(new RTCIceCandidate(candidate));
  } catch (error) {
    console.warn("ICE candidate ignored", error);
  }
}

async function flushCandidateQueue() {
  const queued = [...state.queuedCandidates];
  state.queuedCandidates = [];
  for (const candidate of queued) {
    await addRemoteCandidate(candidate);
  }
}

function listenForRoomState() {
  if (!state.roomRef) return;
  const roomRef = state.roomRef;
  const callback = (snapshot) => {
    if (state.roomRef !== roomRef) return;
    const data = snapshot.val() || {};
    state.roomLocked = Boolean(data.locked);
    state.chatEnabled = data.chatEnabled !== false && data.settings?.chatEnabled !== false;
    state.guestScreenShareEnabled = data.guestScreenShareEnabled !== false && data.settings?.guestScreenShareEnabled !== false;
    const createdAt = normalizeTimestamp(data.createdAt);
    if (createdAt) state.meetingStartedAt = createdAt;
    if (data.hostName) state.hostName = data.hostName;
    syncRoomControlsUI();
    updateChatAvailability();
    if (data.status === "ended" && !state.endingLocally) {
      handleForcedMeetingExit("The host ended the meeting.");
    }
  };
  roomRef.on("value", callback);
  state.listeners.push(() => roomRef.off("value", callback));
}

function listenForJoinRequests() {
  if (!state.roomRef || state.role !== "host") return;
  const ref = state.roomRef.child("joinRequests");
  const callback = (snapshot) => {
    const requests = snapshot.val() || {};
    state.pendingJoinRequests = Object.entries(requests)
      .map(([id, value]) => ({ id, ...(value || {}) }))
      .filter((request) => request.status === "pending")
      .sort((a, b) => (normalizeTimestamp(a.createdAt) || 0) - (normalizeTimestamp(b.createdAt) || 0));
    renderWaitingRoomCard();
  };
  ref.on("value", callback);
  state.listeners.push(() => ref.off("value", callback));
}

function renderWaitingRoomCard() {
  if (!ui.waitingRoomCard) return;
  const request = state.pendingJoinRequests[0] || null;
  state.activeJoinRequest = request;
  ui.waitingRoomCard.hidden = !request || state.role !== "host";
  if (!request) return;
  const extraCount = state.pendingJoinRequests.length > 1 ? ` + ${state.pendingJoinRequests.length - 1} more` : "";
  if (ui.waitingRequestName) ui.waitingRequestName.textContent = `${request.name || "Guest"}${extraCount}`;
}

async function respondToJoinRequest(status) {
  if (!requireHostControl()) return;
  const request = state.activeJoinRequest;
  if (!request?.id || !state.roomRef) return;
  const admitted = status === "admitted";
  try {
    await state.roomRef.child(`joinRequests/${request.id}`).update({
      status: admitted ? "admitted" : "denied",
      respondedAt: firebase.database.ServerValue.TIMESTAMP,
      respondedBy: state.peerId,
    });
    setAppStatus(admitted ? "Guest admitted" : "Guest denied", "ready");
    toast(admitted ? `${request.name || "Guest"} admitted.` : `${request.name || "Guest"} denied.`);
  } catch (error) {
    console.warn(error);
    toast("Could not update the join request.", "error");
  }
}

function listenForParticipants() {
  if (!state.roomRef) return;
  const ref = state.roomRef.child("participants");
  const callback = (snapshot) => {
    const participants = snapshot.val() || {};
    const visibleParticipants = Object.fromEntries(Object.entries(participants).filter(([, value]) => !value?.removed));
    state.participants = visibleParticipants;
    Object.keys(visibleParticipants).forEach((id) => state.participantIdsSeen.add(id));

    const localParticipant = participants[state.peerId];
    if (localParticipant?.removed && state.role !== "host") {
      handleForcedMeetingExit("The host removed you from the meeting.");
      return;
    }

    const hostParticipant = Object.values(visibleParticipants).find((value) => value?.role === "host" && value?.name);
    if (hostParticipant?.name) {
      state.hostName = hostParticipant.name;
      if (ui.hostNameLabel) ui.hostNameLabel.textContent = hostParticipant.name;
    }
    state.handRaised = Boolean(localParticipant?.raisedHand || localParticipant?.handRaised);
    updateHandUI();

    const others = Object.entries(visibleParticipants).filter(([id]) => id !== state.peerId).map(([, value]) => value);
    const remote = others[0];
    state.remoteParticipant = remote || null;
    state.hasRemoteParticipant = Boolean(remote?.name);
    if (remote?.name) {
      updateRemoteTileVisibility(true);
      if (ui.remoteLabel.textContent !== remote.name) setAppStatus(`${remote.name} joined`, "connected");
      ui.remoteLabel.textContent = remote.name;
      const avatar = ui.remotePlaceholder.querySelector(".avatar-circle");
      if (avatar) avatar.textContent = getInitial(remote.name);
    } else {
      updateRemoteTileVisibility(false);
      state.remoteParticipant = null;
      ui.remoteLabel.textContent = state.role === "host" ? "" : "Connecting to host...";
    }
    updateHandUI();
    renderParticipantsList();
  };
  ref.on("value", callback);
  state.listeners.push(() => ref.off("value", callback));
}

function renderParticipantsList() {
  if (!ui.participantsList) return;
  const entries = Object.entries(state.participants || {})
    .filter(([, participant]) => !participant?.removed)
    .sort(([, a], [, b]) => {
      if (a.role === "host" && b.role !== "host") return -1;
      if (a.role !== "host" && b.role === "host") return 1;
      return (normalizeTimestamp(a.joinedAt) || 0) - (normalizeTimestamp(b.joinedAt) || 0);
    });

  ui.participantsList.innerHTML = "";
  if (ui.participantPanelSubtitle) {
    ui.participantPanelSubtitle.textContent = `${entries.length || 1} joined`;
  }

  if (!entries.length) {
    const empty = document.createElement("p");
    empty.className = "empty-panel-note";
    empty.textContent = "No participants have joined yet.";
    ui.participantsList.appendChild(empty);
    return;
  }

  entries.forEach(([id, participant]) => {
    const row = document.createElement("article");
    row.className = "participant-row";

    const avatar = document.createElement("div");
    avatar.className = "participant-avatar";
    avatar.textContent = getInitial(participant.name);

    const detail = document.createElement("div");
    detail.className = "participant-detail";
    const nameLine = document.createElement("div");
    nameLine.className = "participant-name-line";
    const name = document.createElement("strong");
    name.textContent = id === state.peerId ? `${participant.name || "You"} (You)` : participant.name || "Guest";
    nameLine.appendChild(name);
    if (participant.role === "host") {
      const badge = document.createElement("span");
      badge.className = "host-badge";
      badge.textContent = "Host";
      nameLine.appendChild(badge);
    }

    const status = document.createElement("div");
    status.className = "participant-status-list";
    [
      participant.micEnabled ? "Mic on" : "Mic off",
      participant.cameraEnabled ? "Camera on" : "Camera off",
      participant.screenSharing ? "Sharing screen" : "No screen share",
      (participant.raisedHand || participant.handRaised) ? "Hand raised" : "Hand down",
    ].forEach((label) => {
      const chip = document.createElement("span");
      chip.textContent = label;
      status.appendChild(chip);
    });

    detail.append(nameLine, status);
    row.append(avatar, detail);

    if (state.role === "host" && id !== state.peerId && participant.role !== "host") {
      const removeButton = document.createElement("button");
      removeButton.className = "mini-btn danger-soft participant-remove";
      removeButton.type = "button";
      removeButton.textContent = "Remove";
      removeButton.addEventListener("click", () => removeParticipant(id, participant.name || "Guest"));
      row.appendChild(removeButton);
    }

    ui.participantsList.appendChild(row);
  });
}

function openParticipantsPanel() {
  toggleMorePanel(false);
  toggleDevicePanel(false);
  toggleNotesPanel(false);
  renderParticipantsList();
  toggleParticipantsPanel(true);
}

function toggleParticipantsPanel(open = !ui.participantsPanel?.hidden) {
  if (!ui.participantsPanel) return;
  ui.participantsPanel.hidden = !open;
  ui.participantsPanel.classList.toggle("open", open);
}

async function removeParticipant(peerId, name = "Guest") {
  if (!requireHostControl()) return;
  if (!peerId || !state.roomRef || peerId === state.peerId) return;
  try {
    await state.roomRef.child(`participants/${peerId}`).update({
      removed: true,
      removedAt: firebase.database.ServerValue.TIMESTAMP,
      removedBy: state.peerId,
    });
    setAppStatus(`${name} removed`, "ready");
    toast(`${name} removed from the meeting.`);
  } catch (error) {
    console.warn(error);
    toast("Could not remove participant.", "error");
  }
}

function syncRoomControlsUI() {
  if (ui.hostControlsPanel) ui.hostControlsPanel.hidden = state.role !== "host";
  if (ui.lockMeetingBtn) ui.lockMeetingBtn.textContent = state.roomLocked ? "Unlock meeting" : "Lock meeting";
  if (ui.toggleChatHostBtn) ui.toggleChatHostBtn.textContent = state.chatEnabled ? "Disable chat" : "Enable chat";
  if (ui.toggleGuestScreenShareBtn) {
    ui.toggleGuestScreenShareBtn.textContent = state.guestScreenShareEnabled ? "Disable guest screen sharing" : "Enable guest screen sharing";
  }
}

function requireHostControl() {
  if (state.role === "host") return true;
  toast("Only the host can use this control.", "error");
  setAppStatus("Only the host can use this control.", "error");
  return false;
}

async function toggleMeetingLock() {
  if (!requireHostControl() || !state.roomRef) return;
  const nextLocked = !state.roomLocked;
  try {
    await state.roomRef.update({
      locked: nextLocked,
      updatedAt: firebase.database.ServerValue.TIMESTAMP,
    });
    setAppStatus(nextLocked ? "Meeting locked" : "Meeting unlocked", "ready");
    toast(nextLocked ? "Meeting locked." : "Meeting unlocked.");
  } catch (error) {
    console.warn(error);
    toast("Could not update meeting lock.", "error");
  }
}

async function toggleChatSetting() {
  if (!requireHostControl() || !state.roomRef) return;
  const nextEnabled = !state.chatEnabled;
  try {
    await state.roomRef.update({
      chatEnabled: nextEnabled,
      "settings/chatEnabled": nextEnabled,
      updatedAt: firebase.database.ServerValue.TIMESTAMP,
    });
    setAppStatus(nextEnabled ? "Chat enabled" : "Chat disabled", "ready");
    toast(nextEnabled ? "Chat enabled." : "Chat disabled for guests.");
  } catch (error) {
    console.warn(error);
    toast("Could not update chat setting.", "error");
  }
}

async function toggleGuestScreenShareSetting() {
  if (!requireHostControl() || !state.roomRef) return;
  const nextEnabled = !state.guestScreenShareEnabled;
  try {
    await state.roomRef.update({
      guestScreenShareEnabled: nextEnabled,
      "settings/guestScreenShareEnabled": nextEnabled,
      updatedAt: firebase.database.ServerValue.TIMESTAMP,
    });
    setAppStatus(nextEnabled ? "Guest screen sharing enabled" : "Guest screen sharing disabled", "ready");
    toast(nextEnabled ? "Guest screen sharing enabled." : "Guest screen sharing disabled.");
  } catch (error) {
    console.warn(error);
    toast("Could not update screen sharing setting.", "error");
  }
}

async function endMeetingForEveryone() {
  if (!requireHostControl() || !state.roomRef) return;
  state.endingLocally = true;
  try {
    await state.roomRef.update({
      status: "ended",
      endedAt: firebase.database.ServerValue.TIMESTAMP,
      endedBy: state.peerId,
      updatedAt: firebase.database.ServerValue.TIMESTAMP,
    });
    await state.roomRef.child("joinRequests").remove().catch(() => {});
  } catch (error) {
    console.warn(error);
  }
  await leaveMeeting();
}

function updateChatAvailability() {
  const disabled = !state.chatEnabled && state.role !== "host";
  if (ui.chatInput) {
    ui.chatInput.disabled = disabled;
    ui.chatInput.placeholder = disabled ? "Chat is disabled by the host" : "Type a message...";
  }
  if (ui.sendChatBtn) ui.sendChatBtn.disabled = disabled;
  ui.chatToggleBtn?.classList.toggle("chat-disabled", disabled);
}

function openNotesPanel() {
  toggleMorePanel(false);
  toggleDevicePanel(false);
  toggleParticipantsPanel(false);
  loadMeetingNotes();
  toggleNotesPanel(true);
  ui.notesInput?.focus();
}

function toggleNotesPanel(open = !ui.notesPanel?.hidden) {
  if (!ui.notesPanel) return;
  ui.notesPanel.hidden = !open;
  ui.notesPanel.classList.toggle("open", open);
}

function notesStorageKey() {
  return `akaora-meet-notes-${state.roomId || parseRoomId(ui.roomCodeInput?.value || "") || "draft"}`;
}

function loadMeetingNotes() {
  if (!ui.notesInput) return;
  try {
    ui.notesInput.value = localStorage.getItem(notesStorageKey()) || "";
    setNotesStatus("Notes are private and saved only on this device.");
  } catch (_) {
    setNotesStatus("Notes could not be loaded from this browser.");
  }
}

function saveMeetingNotes() {
  if (!ui.notesInput) return;
  try {
    localStorage.setItem(notesStorageKey(), ui.notesInput.value);
    setNotesStatus("Notes saved.");
    toast("Meeting notes saved.");
  } catch (_) {
    setNotesStatus("Could not save notes in this browser.");
    toast("Could not save notes in this browser.", "error");
  }
}

function downloadMeetingNotes() {
  const text = ui.notesInput?.value || "";
  const room = state.roomId || "meeting";
  const blob = new Blob([text || "No notes saved."], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `akaora-meet-${room}-notes.txt`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  setNotesStatus("Notes downloaded.");
}

function clearMeetingNotes() {
  if (!ui.notesInput) return;
  ui.notesInput.value = "";
  try {
    localStorage.removeItem(notesStorageKey());
  } catch (_) {}
  setNotesStatus("Notes cleared.");
  toast("Meeting notes cleared.");
}

function setNotesStatus(text) {
  if (ui.notesStatus) ui.notesStatus.textContent = text;
}

function openChatDrawer() {
  ui.chatDrawer.classList.add("open");
  toggleReactionPanel(false);
  toggleMorePanel(false);
  toggleDevicePanel(false);
  toggleParticipantsPanel(false);
  toggleNotesPanel(false);
  setUnreadChatCount(0);
}

function setupFirebaseChat() {
  if (!state.roomRef) return;
  const roomRef = state.roomRef;
  state.chatKeys.clear();
  state.chatMessageCount = 0;
  setUnreadChatCount(0);
  ui.chatMessages.innerHTML = "";

  const ref = roomRef.child("chat").limitToLast(100);
  const handleMessage = (snapshot, notify = true) => {
    const key = snapshot.key;
    if (state.chatKeys.has(key)) return;
    state.chatKeys.add(key);
    const msg = snapshot.val();
    if (!msg || !msg.text) return;
    state.chatMessageCount += 1;
    appendChatBubble(msg);
    if (notify) handleIncomingChatNotice(msg);
  };
  ref.once("value").then((snapshot) => {
    if (state.roomRef !== roomRef) return;
    snapshot.forEach((child) => handleMessage(child, false));
    const callback = (child) => handleMessage(child, true);
    ref.on("child_added", callback);
    state.listeners.push(() => ref.off("child_added", callback));
  }).catch((error) => {
    console.warn(error);
    toast("Chat sync could not start.", "error");
  });
}

function setupFirebaseReactions() {
  if (!state.roomRef) return;
  const roomRef = state.roomRef;
  state.reactionKeys.clear();
  if (ui.reactionStream) ui.reactionStream.innerHTML = "";

  const ref = roomRef.child("reactions").limitToLast(30);
  const handleReaction = (snapshot, animate = true) => {
    const key = snapshot.key;
    if (state.reactionKeys.has(key)) return;
    state.reactionKeys.add(key);
    const reaction = snapshot.val();
    if (!reaction || !reaction.reactionId) return;
    if (animate) showReactionBurst(reaction);
  };

  ref.once("value").then((snapshot) => {
    if (state.roomRef !== roomRef) return;
    snapshot.forEach((child) => handleReaction(child, false));
    const callback = (child) => handleReaction(child, true);
    ref.on("child_added", callback);
    state.listeners.push(() => ref.off("child_added", callback));
  }).catch((error) => {
    console.warn(error);
    toast("Reactions sync could not start.", "error");
  });
}

async function sendChatMessage() {
  const text = ui.chatInput.value.trim();
  if (!text || !state.roomRef) return;
  if (!state.chatEnabled && state.role !== "host") {
    toast("Chat is disabled by the host.", "error");
    setAppStatus("Chat disabled", "error");
    return;
  }
  ui.chatInput.value = "";
  ui.emojiRow.hidden = true;

  try {
    setAppStatus("Sending message...", "loading");
    await state.roomRef.child("chat").push({
      senderId: state.peerId,
      name: state.displayName,
      text,
      createdAt: firebase.database.ServerValue.TIMESTAMP,
    });
    setAppStatus("Message sent", "ready");
  } catch (error) {
    console.warn(error);
    setAppStatus("Failed • Message not sent", "error");
    toast("Message could not be sent. Check Firebase rules.", "error");
  }
}

function appendChatBubble(msg) {
  const bubble = document.createElement("div");
  bubble.className = `chat-bubble${msg.senderId === state.peerId ? " me" : ""}`;
  const time = msg.createdAt ? new Date(msg.createdAt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) : "Now";
  bubble.innerHTML = `<small>${escapeHtml(msg.name || "Guest")} • ${escapeHtml(time)}</small><p>${escapeHtml(msg.text)}</p>`;
  ui.chatMessages.appendChild(bubble);
  ui.chatMessages.scrollTop = ui.chatMessages.scrollHeight;
}

function handleIncomingChatNotice(msg) {
  if (msg.senderId === state.peerId) return;
  if (ui.chatDrawer.classList.contains("open")) return;
  setUnreadChatCount(state.unreadChatCount + 1);
  const rawText = String(msg.text || "").trim();
  const previewText = rawText.length > 96 ? `${rawText.slice(0, 95).trim()}...` : rawText;
  toast(`${msg.name || "Guest"}: ${previewText}`, "", 10000);
  const container = $("chatPopups");
  if (!container) return;
  const popup = document.createElement("div");
  const name = document.createElement("strong");
  const text = document.createElement("p");
  popup.className = "chat-popup";
  name.textContent = msg.name || "Guest";
  text.textContent = previewText;
  popup.append(name, text);
  container.appendChild(popup);
  while (container.children.length > 3) container.firstElementChild?.remove();
  window.setTimeout(() => popup.classList.add("leaving"), 4300);
  window.setTimeout(() => popup.remove(), 4800);
}

function setUnreadChatCount(count) {
  state.unreadChatCount = Math.max(0, Math.min(99, Number(count) || 0));
  const badge = ui.chatUnreadBadge || $("chatUnreadBadge");
  if (!badge) return;
  badge.hidden = state.unreadChatCount === 0;
  badge.textContent = state.unreadChatCount > 98 ? "99+" : String(state.unreadChatCount);
  ui.chatToggleBtn?.classList.toggle("has-unread", state.unreadChatCount > 0);
}

function showChatPopup(msg) {
  const container = ui.chatPopups || $("chatPopups");
  if (!container) return;
  const popup = document.createElement("div");
  popup.className = "chat-popup";
  const name = document.createElement("strong");
  const text = document.createElement("p");
  name.textContent = msg.name || "Guest";
  text.textContent = truncateText(msg.text, 96);
  popup.append(name, text);
  container.appendChild(popup);
  while (container.children.length > 3) container.firstElementChild?.remove();
  window.setTimeout(() => popup.classList.add("leaving"), 4300);
  window.setTimeout(() => popup.remove(), 4800);
}

function toggleReactionPanel(open = ui.reactionPanel?.hidden) {
  if (!ui.reactionPanel) return;
  const nextOpen = Boolean(open);
  ui.reactionPanel.hidden = !nextOpen;
  ui.reactionPanel.classList.toggle("open", nextOpen);
  ui.reactionBtn?.classList.toggle("on", nextOpen);
  ui.reactionBtn?.setAttribute("aria-expanded", String(nextOpen));
  if (nextOpen) {
    toggleMorePanel(false);
    toggleDevicePanel(false);
  }
}

async function sendReaction(reactionId) {
  const reaction = getReactionInfo(reactionId);
  if (!reaction || !state.roomRef) return;
  toggleReactionPanel(false);

  try {
    await state.roomRef.child("reactions").push({
      senderId: state.peerId,
      name: state.displayName || "Guest",
      reactionId,
      createdAt: firebase.database.ServerValue.TIMESTAMP,
    });
    setAppStatus(`${reaction.label} reaction sent`, "ready");
  } catch (error) {
    console.warn(error);
    toast("Reaction could not be sent. Check Firebase rules.", "error");
  }
}

function showReactionBurst(reaction) {
  const stream = ui.reactionStream || $("reactionStream");
  if (!stream) return;
  const info = getReactionInfo(reaction.reactionId);
  if (!info) return;

  const burst = document.createElement("div");
  const isLocal = reaction.senderId === state.peerId;
  burst.className = `reaction-burst${isLocal ? " me" : ""}`;
  burst.style.setProperty("--rx", `${Math.round(8 + Math.random() * 68)}%`);
  burst.style.setProperty("--delay", `${Math.round(Math.random() * 260)}ms`);
  burst.innerHTML = `<span aria-hidden="true">${info.emoji}</span><b>${escapeHtml(isLocal ? "You" : reaction.name || "Guest")}</b>`;
  stream.appendChild(burst);
  while (stream.children.length > 14) stream.firstElementChild?.remove();
  window.setTimeout(() => burst.remove(), 3600);
}

async function toggleRaiseHand() {
  if (!state.roomRef) return;
  const nextRaised = !state.handRaised;
  state.handRaised = nextRaised;
  updateHandUI();

  try {
    await state.roomRef.child(`participants/${state.peerId}`).update({
      handRaised: nextRaised,
      raisedHand: nextRaised,
      handUpdatedAt: firebase.database.ServerValue.TIMESTAMP,
    });
    setAppStatus(nextRaised ? "Hand raised" : "Hand lowered", "ready");
    toast(nextRaised ? "Your hand is raised." : "Your hand is lowered.");
  } catch (error) {
    console.warn(error);
    state.handRaised = !nextRaised;
    updateHandUI();
    toast("Could not update hand status.", "error");
  }
}

function updateHandUI() {
  const localRaised = Boolean(state.handRaised);
  const remoteRaised = Boolean(state.remoteParticipant?.raisedHand || state.remoteParticipant?.handRaised);
  const remoteName = state.remoteParticipant?.name || "Guest";
  const localTile = document.querySelector(".local-tile");
  const remoteTile = document.querySelector(".remote-tile");

  if (ui.localHandBadge) ui.localHandBadge.hidden = !localRaised;
  localTile?.classList.toggle("hand-raised", localRaised);

  if (ui.remoteHandBadge) {
    ui.remoteHandBadge.hidden = !remoteRaised;
    const label = ui.remoteHandBadge.querySelector("strong");
    if (label) label.textContent = `${remoteName} raised hand`;
  }
  remoteTile?.classList.toggle("hand-raised", remoteRaised);

  if (ui.handBtn) {
    ui.handBtn.classList.toggle("on", localRaised);
    ui.handBtn.setAttribute("aria-pressed", String(localRaised));
    ui.handBtn.setAttribute("aria-label", localRaised ? "Lower hand" : "Raise hand");
    ui.handBtn.setAttribute("title", localRaised ? "Lower hand" : "Raise hand");
    const srLabel = ui.handBtn.querySelector(".sr-only");
    if (srLabel) srLabel.textContent = localRaised ? "Lower hand" : "Raise hand";
  }
}

function enterMeetingScreen() {
  ui.activeRoomCode.textContent = state.roomId;
  ui.localInitial.textContent = getInitial(state.displayName);
  ui.localLabel.textContent = state.displayName || "You";
  if (ui.hostNameLabel) ui.hostNameLabel.textContent = state.hostName || (state.role === "host" ? state.displayName : "Host");
  state.hasRemoteParticipant = false;
  state.remoteParticipant = null;
  state.handRaised = false;
  state.endingLocally = false;
  state.pendingJoinRequests = [];
  state.activeJoinRequest = null;
  state.waitingForAdmission = false;
  state.waitingForAdmission = false;
  setUnreadChatCount(0);
  if (ui.chatPopups) ui.chatPopups.innerHTML = "";
  if (ui.reactionStream) ui.reactionStream.innerHTML = "";
  if (ui.waitingRoomCard) ui.waitingRoomCard.hidden = true;
  toggleParticipantsPanel(false);
  toggleNotesPanel(false);
  toggleReactionPanel(false);
  updateHandUI();
  syncRoomControlsUI();
  updateChatAvailability();
  loadMeetingNotes();
  ui.remoteLabel.textContent = state.role === "host" ? "" : "Connecting to host...";
  updateRemoteTileVisibility(state.role !== "host");
  if (ui.meetingProfileBadge) ui.meetingProfileBadge.textContent = String((state.remoteStream ? 2 : 1));
  if (ui.inviteLinkText) ui.inviteLinkText.textContent = buildInviteLink();
  if (ui.inviteCardUser) ui.inviteCardUser.textContent = `Joined as ${state.displayName || 'Guest'}`;
  ui.chatDrawer.classList.remove("open");
  updateLocalMediaUI();
  updateUrlRoom(state.roomId);
  showView("meeting");
  startMeetingClock();
  if (state.role === 'host' && state.inviteCardShownForRoom !== state.roomId) {
    showInviteCard();
    state.inviteCardShownForRoom = state.roomId;
  } else {
    hideInviteCard();
  }
  setPinnedTile(null, false);
  setVideoLayout(state.activeLayout || "auto");
  updateVideoGridLayout();
}

async function toggleMicDuringCall() {
  if (!state.pc) return;

  if (!state.currentAudioTrack) {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: audioConstraints(), video: false });
      state.currentAudioTrack = stream.getAudioTracks()[0] || null;
      if (state.currentAudioTrack) state.localStream.addTrack(state.currentAudioTrack);
      await applyLocalTracksToSenders();
      setAppStatus("Mic connected", "connected");
      toast("Microphone turned on.");
    } catch (error) {
      console.warn(error);
      setAppStatus("Failed • Mic blocked", "error");
      toast("Microphone permission blocked.", "error");
    }
  } else {
    state.currentAudioTrack.enabled = !state.currentAudioTrack.enabled;
    setAppStatus(state.currentAudioTrack.enabled ? "Mic on" : "Mic off", "ready");
    toast(state.currentAudioTrack.enabled ? "Microphone unmuted." : "Microphone muted.");
  }
  updateLocalMediaUI();
  await updateParticipantPresence();
}

async function toggleCameraDuringCall() {
  if (!state.pc) return;

  if (!state.currentVideoTrack) {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: false, video: videoConstraints() });
      state.currentVideoTrack = stream.getVideoTracks()[0] || null;
      if (state.currentVideoTrack) state.localStream.addTrack(state.currentVideoTrack);
      ui.localVideo.srcObject = state.localStream;
      await applyLocalTracksToSenders();
      setAppStatus("Camera connected", "connected");
      toast("Camera turned on.");
    } catch (error) {
      console.warn(error);
      setAppStatus("Failed • Camera blocked", "error");
      toast("Camera permission blocked.", "error");
    }
  } else {
    state.currentVideoTrack.enabled = !state.currentVideoTrack.enabled;
    setAppStatus(state.currentVideoTrack.enabled ? "Camera on" : "Camera off", "ready");
    toast(state.currentVideoTrack.enabled ? "Camera turned on." : "Camera turned off.");
  }
  updateLocalMediaUI();
  await updateParticipantPresence();
}

async function toggleScreenShare() {
  if (!state.pc) return;

  if (state.localScreenTrack) {
    await stopScreenShare();
    return;
  }

  if (state.role !== "host" && !state.guestScreenShareEnabled) {
    toast("The host disabled guest screen sharing.", "error");
    setAppStatus("Guest screen sharing disabled", "error");
    return;
  }

  try {
    const screenStream = await navigator.mediaDevices.getDisplayMedia({
      video: { cursor: "always", frameRate: { ideal: 30, max: 60 }, displaySurface: "monitor" },
      audio: { echoCancellation: false, noiseSuppression: false, autoGainControl: false },
    });
    state.localScreenStream = screenStream;
    state.localScreenTrack = screenStream.getVideoTracks()[0] || null;
    state.localScreenAudioTrack = screenStream.getAudioTracks()[0] || null;
    if (!state.localScreenTrack) throw new Error("No screen track selected");

    const screenVideoSender = findSender("video", 1) || findSender("video", 0);
    const screenAudioSender = findSender("audio", 1);
    if (screenVideoSender) await screenVideoSender.replaceTrack(state.localScreenTrack);
    if (screenAudioSender && state.localScreenAudioTrack) await screenAudioSender.replaceTrack(state.localScreenAudioTrack);

    state.screenShareUsed = true;
    setPinnedTile(null, false);
    ui.screenVideo.srcObject = screenStream;
    ui.screenTile.hidden = false;
    ui.screenTile.dataset.source = "local";
    const badge = ui.screenTile.querySelector(".tile-badge span");
    if (badge) badge.textContent = state.localScreenAudioTrack ? "Screen + sound" : "Screen sharing";
    ui.screenBtn.classList.add("on");
    ui.localVideo.srcObject = state.localStream;
    setAppStatus(state.localScreenAudioTrack ? "Screen sharing with audio" : "Screen sharing started", "connected");
    if (!state.localScreenAudioTrack) {
      toast("Screen audio is unavailable for this source. Screen video is still being shared.");
    }
    await updateParticipantPresence();

    state.localScreenTrack.onended = async () => {
      await stopScreenShare(false);
    };
    if (state.localScreenAudioTrack) {
      state.localScreenAudioTrack.onended = async () => {
        await stopScreenShare(false);
      };
    }
  } catch (error) {
    console.warn(error);
    setAppStatus("Screen share cancelled", "ready");
  } finally {
    updateLocalMediaUI();
    updateVideoGridLayout();
  }
}

async function stopScreenShare(showToast = true) {
  const screenVideoSender = findSender("video", 1) || findSender("video", 0);
  const screenAudioSender = findSender("audio", 1);
  try { state.localScreenTrack?.stop(); } catch (_) {}
  try { state.localScreenAudioTrack?.stop(); } catch (_) {}
  state.localScreenStream?.getTracks().forEach((track) => { try { track.stop(); } catch (_) {} });
  state.localScreenTrack = null;
  state.localScreenAudioTrack = null;
  state.localScreenStream = null;
  if (screenVideoSender) await screenVideoSender.replaceTrack(null);
  if (screenAudioSender) await screenAudioSender.replaceTrack(null);
  if (ui.screenTile.dataset.source !== "remote") {
    ui.screenVideo.srcObject = null;
    ui.screenTile.hidden = true;
  }
  ui.screenBtn.classList.remove("on");
  updateLocalMediaUI();
  await updateParticipantPresence();
  updatePresentationHud();
  setAppStatus("Screen sharing stopped", "ready");
  if (showToast) toast("Screen sharing stopped.");
}

function updateLocalMediaUI() {
  ui.localVideo.srcObject = state.localStream;
  const micOn = Boolean(state.currentAudioTrack && state.currentAudioTrack.enabled);
  const camOn = Boolean(state.currentVideoTrack && state.currentVideoTrack.enabled);
  const screenOn = Boolean(state.localScreenTrack);

  ui.micBtn.classList.toggle("on", micOn);
  ui.micBtn.classList.toggle("off", !micOn);
  ui.micBtn.setAttribute("aria-label", micOn ? "Microphone on" : "Microphone off");
  ui.micBtn.title = micOn ? "Turn microphone off" : "Turn microphone on";

  ui.cameraBtn.classList.toggle("on", camOn);
  ui.cameraBtn.classList.toggle("off", !camOn);
  ui.cameraBtn.setAttribute("aria-label", camOn ? "Camera on" : "Camera off");
  ui.cameraBtn.title = camOn ? "Turn camera off" : "Turn camera on";

  ui.screenBtn.classList.toggle("on", screenOn);
  ui.screenBtn.setAttribute("aria-label", screenOn ? "Stop screen sharing" : "Share screen");
  ui.screenBtn.title = screenOn ? "Stop screen sharing" : "Share screen";

  ui.localPlaceholder.classList.toggle("hidden", camOn);
  ui.localVideo.classList.toggle("is-live", camOn);
  ui.localMediaState.textContent = `${micOn ? "Mic on" : "Mic off"} • ${camOn ? "Camera on" : "Camera off"}${screenOn ? " • Screen sharing" : ""}`;
  updateVideoGridLayout();
}

function audioConstraints() {
  return state.selectedAudioDeviceId ? { deviceId: { exact: state.selectedAudioDeviceId } } : true;
}

function videoConstraints() {
  const constraints = {
    width: { ideal: 1920 },
    height: { ideal: 1080 },
    frameRate: { ideal: 30, max: 60 },
    aspectRatio: { ideal: 16 / 9 },
  };
  if (state.selectedVideoDeviceId) constraints.deviceId = { exact: state.selectedVideoDeviceId };
  return constraints;
}

async function populateDeviceLists(announce = false) {
  if (!navigator.mediaDevices?.enumerateDevices || !ui.micDeviceSelect || !ui.cameraDeviceSelect) return;
  try {
    const devices = await navigator.mediaDevices.enumerateDevices();
    const mics = devices.filter((device) => device.kind === "audioinput");
    const cameras = devices.filter((device) => device.kind === "videoinput");
    fillDeviceSelect(ui.micDeviceSelect, mics, "Microphone", state.selectedAudioDeviceId);
    fillDeviceSelect(ui.cameraDeviceSelect, cameras, "Camera", state.selectedVideoDeviceId);
    if (announce) {
      const note = document.querySelector(".device-note");
      if (note) note.textContent = "Device list refreshed. Browser may show device names only after permission is allowed.";
    }
  } catch (error) {
    console.warn(error);
    if (announce) toast("Could not read device list. Allow browser permissions first.", "error");
  }
}

function fillDeviceSelect(select, devices, fallbackLabel, selectedId) {
  const current = selectedId || select.value || "";
  select.innerHTML = "";
  if (!devices.length) {
    const option = document.createElement("option");
    option.value = "";
    option.textContent = `No ${fallbackLabel.toLowerCase()} found`;
    select.appendChild(option);
    select.disabled = true;
    return;
  }
  select.disabled = false;
  devices.forEach((device, index) => {
    const option = document.createElement("option");
    option.value = device.deviceId;
    option.textContent = device.label || `${fallbackLabel} ${index + 1}`;
    select.appendChild(option);
  });
  if (current && [...select.options].some((option) => option.value === current)) {
    select.value = current;
  }
  if (select === ui.micDeviceSelect) state.selectedAudioDeviceId = select.value;
  if (select === ui.cameraDeviceSelect) state.selectedVideoDeviceId = select.value;
}

async function switchAudioDevice() {
  if (!state.pc) {
    setAppStatus("Microphone selected", "ready");
    return;
  }
  if (!state.currentAudioTrack) {
    setAppStatus("Microphone selected • turn mic on to use", "ready");
    return;
  }
  try {
    setAppStatus("Switching microphone...", "loading");
    const oldTrack = state.currentAudioTrack;
    const wasEnabled = oldTrack.enabled;
    const stream = await navigator.mediaDevices.getUserMedia({ audio: audioConstraints(), video: false });
    const newTrack = stream.getAudioTracks()[0] || null;
    if (!newTrack) throw new Error("No microphone track returned");
    newTrack.enabled = wasEnabled;
    state.localStream.removeTrack(oldTrack);
    try { oldTrack.stop(); } catch (_) {}
    state.currentAudioTrack = newTrack;
    state.localStream.addTrack(newTrack);
    await applyLocalTracksToSenders();
    updateLocalMediaUI();
    await populateDeviceLists(false);
    setAppStatus("Microphone switched", "connected");
    toast("Microphone switched.");
  } catch (error) {
    console.warn(error);
    setAppStatus("Failed • Microphone switch", "error");
    toast("Could not switch microphone.", "error");
  }
}

async function switchVideoDevice() {
  if (!state.pc) {
    setAppStatus("Camera selected", "ready");
    return;
  }
  if (!state.currentVideoTrack) {
    setAppStatus("Camera selected • turn camera on to use", "ready");
    return;
  }
  try {
    setAppStatus("Switching camera...", "loading");
    const oldTrack = state.currentVideoTrack;
    const wasEnabled = oldTrack.enabled;
    const stream = await navigator.mediaDevices.getUserMedia({ audio: false, video: videoConstraints() });
    const newTrack = stream.getVideoTracks()[0] || null;
    if (!newTrack) throw new Error("No camera track returned");
    newTrack.enabled = wasEnabled;
    state.localStream.removeTrack(oldTrack);
    try { oldTrack.stop(); } catch (_) {}
    state.currentVideoTrack = newTrack;
    state.localStream.addTrack(newTrack);
    if (!state.localScreenTrack) await applyLocalTracksToSenders();
    updateLocalMediaUI();
    await populateDeviceLists(false);
    setAppStatus("Camera switched", "connected");
    toast("Camera switched.");
  } catch (error) {
    console.warn(error);
    setAppStatus("Failed • Camera switch", "error");
    toast("Could not switch camera.", "error");
  }
}

function toggleDevicePanel(open = !ui.devicePanel?.hidden) {
  if (!ui.devicePanel) return;
  ui.devicePanel.hidden = !open;
  ui.devicePanel.classList.toggle("open", open);
  if (open) {
    toggleReactionPanel(false);
    toggleMorePanel(false);
    toggleParticipantsPanel(false);
    toggleNotesPanel(false);
    populateDeviceLists(false);
  }
}

function toggleMorePanel(open = ui.morePanel?.hidden) {
  if (!ui.morePanel) return;
  const nextOpen = Boolean(open);
  ui.morePanel.hidden = !nextOpen;
  ui.morePanel.classList.toggle("open", nextOpen);
  ui.moreBtn?.classList.toggle("on", nextOpen);
  ui.moreBtn?.setAttribute("aria-expanded", String(nextOpen));
  if (nextOpen) {
    toggleReactionPanel(false);
    toggleDevicePanel(false);
    toggleParticipantsPanel(false);
    toggleNotesPanel(false);
    syncRoomControlsUI();
    syncViewSettingsControls();
  }
}

function updateRemoteTileVisibility(remoteParticipant = state.hasRemoteParticipant, updateLayout = true) {
  const remoteTile = ui.videoGrid?.querySelector(".remote-tile");
  if (!remoteTile) return;

  const hasRemoteMedia = state.remoteStream?.getTracks().some((track) => track.readyState === "live") || false;
  const shouldShow = Boolean(remoteParticipant || hasRemoteMedia);
  remoteTile.hidden = !shouldShow;
  remoteTile.classList.toggle("empty-remote", !shouldShow);

  if (!shouldShow && state.pinnedTiles.includes("remote")) {
    state.pinnedTiles = [];
    ui.remotePinBtn?.classList.remove("active");
    ui.remotePinBtn?.setAttribute("aria-pressed", "false");
    ui.remotePinBtn?.setAttribute("aria-label", "Pin remote video");
    ui.remotePinBtn?.setAttribute("title", "Pin remote video");
  }

  if (updateLayout) updateVideoGridLayout();
}

function setMaxTiles(value, announce = false) {
  state.viewSettings.maxTiles = clampNumber(value, 1, 3, 3);
  saveViewSettings();
  syncViewSettingsControls();
  updateVideoGridLayout();
  if (announce) setAppStatus(`Showing up to ${state.viewSettings.maxTiles} tile${state.viewSettings.maxTiles === 1 ? "" : "s"}`, "ready");
}

function setHideTilesWithoutVideo(enabled, announce = false) {
  state.viewSettings.hideNoVideo = Boolean(enabled);
  saveViewSettings();
  syncViewSettingsControls();
  updateVideoGridLayout();
  if (announce) setAppStatus(state.viewSettings.hideNoVideo ? "Tiles without video hidden" : "All tiles shown", "ready");
}

function getTileName(tile) {
  if (!tile || tile.hidden) return "";
  if (tile.classList.contains("remote-tile")) return "remote";
  if (tile.classList.contains("local-tile")) return "local";
  if (tile.classList.contains("screen-tile")) return "screen";
  return "";
}

function setPinnedTile(tileName, announce = true) {
  const allowed = ["remote", "local", "screen"];
  const next = allowed.includes(tileName) ? tileName : null;
  if (!next) {
    state.pinnedTiles = [];
  } else {
    state.pinnedTiles = state.pinnedTiles.includes(next) ? [] : [next];
  }

  [
    ["remote", document.querySelector(".remote-tile")],
    ["local", document.querySelector(".local-tile")],
    ["screen", ui.screenTile],
  ].forEach(([name, tile]) => {
    if (!tile) return;
    const pinned = state.pinnedTiles.includes(name);
    tile.classList.toggle("pinned", pinned);
    if (pinned) {
      tile.classList.remove("pin-animate");
      void tile.offsetWidth;
      tile.classList.add("pin-animate");
    }
  });

  ui.pinButtons?.forEach((button) => {
    const active = state.pinnedTiles.includes(button.dataset.pinTile);
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
    const label = button.dataset.pinTile === "local" ? "your video" : button.dataset.pinTile === "screen" ? "shared screen" : "remote video";
    button.title = active ? `Unpin ${label}` : `Pin ${label}`;
    button.setAttribute("aria-label", button.title);
  });

  if (announce) {
    if (state.pinnedTiles.length === 0) setAppStatus("Pinned views cleared", "ready");
    else setAppStatus("Pinned 1 view", "ready");
  }
  updateVideoGridLayout(false);
}

function setVideoLayout(layout = "auto", announce = false) {
  state.activeLayout = normalizeViewMode(layout);
  state.viewSettings.mode = state.activeLayout;
  ui.videoGrid?.setAttribute("data-layout", state.activeLayout);
  ui.layoutButtons?.forEach((button) => button.classList.toggle("active", normalizeViewMode(button.dataset.layout) === state.activeLayout));
  saveViewSettings();
  syncViewSettingsControls();
  updateVideoGridLayout();
  if (announce) {
    const labels = { auto: "Auto dynamic", tiled: "Tiled", spotlight: "Spotlight", sidebar: "Sidebar" };
    setAppStatus(`${labels[state.activeLayout]} view`, "ready");
  }
}

function updateVideoGridLayout() {
  if (!ui.videoGrid) return;
  applyTileVisibilitySettings();
  const visibleTiles = [...ui.videoGrid.querySelectorAll(".video-tile")].filter((tile) => !tile.hidden && !tile.classList.contains("layout-hidden"));
  const visibleNames = visibleTiles.map((tile) => getTileName(tile)).filter(Boolean);
  state.pinnedTiles = (state.pinnedTiles || []).filter((name) => visibleNames.includes(name));
  ui.videoGrid.dataset.count = String(visibleTiles.length || 1);
  if (ui.meetingProfileBadge) ui.meetingProfileBadge.textContent = String(Math.max(1, visibleTiles.length));
  ui.videoGrid.dataset.pinCount = String(state.pinnedTiles.length || 0);
  ui.videoGrid.dataset.hasPins = state.pinnedTiles.length ? "true" : "false";
  ui.videoGrid.dataset.pinned = state.pinnedTiles.join(",");
  ui.videoGrid.dataset.layout = state.activeLayout || "auto";
  ui.videoGrid.dataset.maxTiles = String(state.viewSettings.maxTiles || 3);
  ui.videoGrid.dataset.hideNoVideo = String(Boolean(state.viewSettings.hideNoVideo));
  ui.videoGrid.classList.toggle("has-screen", !ui.screenTile.hidden);

  visibleTiles.forEach((tile) => {
    const name = getTileName(tile);
    tile.classList.remove("auto-focus");
    tile.style.order = state.pinnedTiles.includes(name) ? "-1" : "0";
    tile.classList.toggle("pinned", state.pinnedTiles.includes(name));
  });
  if (!state.pinnedTiles.length && ["spotlight", "sidebar"].includes(state.activeLayout)) {
    chooseAutoFocusTile(visibleTiles)?.classList.add("auto-focus");
  }
  updateScreenPreviewTiles();
  updatePresentationHud();
}

function applyTileVisibilitySettings() {
  const tiles = [...ui.videoGrid.querySelectorAll(".video-tile")];
  tiles.forEach((tile) => tile.classList.remove("layout-hidden"));

  if (state.viewSettings.hideNoVideo) {
    tiles.forEach((tile) => {
      if (tile.hidden) return;
      const name = getTileName(tile);
      const keepVisible = state.pinnedTiles.includes(name) || name === "screen" || tileHasVideo(name);
      tile.classList.toggle("layout-hidden", !keepVisible);
    });
  }

  let visible = tiles.filter((tile) => !tile.hidden && !tile.classList.contains("layout-hidden"));
  if (!visible.length) {
    const fallbackTile = tiles.find((tile) => getTileName(tile) === "local") || tiles.find((tile) => !tile.hidden);
    fallbackTile?.classList.remove("layout-hidden");
    visible = tiles.filter((tile) => !tile.hidden && !tile.classList.contains("layout-hidden"));
  }

  const maxTiles = clampNumber(state.viewSettings.maxTiles, 1, 3, 3);
  if (visible.length <= maxTiles) return;

  const keep = new Set([...visible].sort((a, b) => tilePriority(a) - tilePriority(b)).slice(0, maxTiles));
  visible.forEach((tile) => tile.classList.toggle("layout-hidden", !keep.has(tile)));
}

function tileHasVideo(name) {
  if (name === "screen") return !ui.screenTile.hidden;
  if (name === "local") return Boolean(state.currentVideoTrack && state.currentVideoTrack.enabled && state.currentVideoTrack.readyState === "live");
  if (name === "remote") {
    return state.remoteStream.getVideoTracks().some((track) => track.readyState === "live" && !track.muted);
  }
  return false;
}

function tilePriority(tile) {
  const name = getTileName(tile);
  if (state.pinnedTiles.includes(name)) return 0;
  if (name === "screen") return 1;
  if (state.activeLayout === "spotlight") return name === "remote" ? 2 : name === "local" ? 3 : 4;
  if (state.activeLayout === "sidebar") return name === "remote" ? 2 : name === "local" ? 3 : 4;
  return name === "remote" ? 2 : name === "local" ? 3 : 4;
}

function chooseAutoFocusTile(visibleTiles) {
  if (!visibleTiles.length) return null;
  return [...visibleTiles].sort((a, b) => tilePriority(a) - tilePriority(b))[0] || null;
}

async function requestFullscreenFor(element, label = "Full screen") {
  if (!element) return;
  try {
    if (document.fullscreenElement) {
      await document.exitFullscreen();
      setAppStatus("Exited full screen", "ready");
      return;
    }
    const target = element.tagName === "VIDEO" && element.readyState > 0 ? element : element;
    if (target.requestFullscreen) await target.requestFullscreen();
    else if (target.webkitRequestFullscreen) target.webkitRequestFullscreen();
    else throw new Error("Fullscreen is not supported");
    setAppStatus(label, "connected");
  } catch (error) {
    console.warn(error);
    toast("Fullscreen is not supported or was blocked by the browser.", "error");
  }
}

function requestTileFullscreen(tileName) {
  const tileMap = {
    remote: document.querySelector(".remote-tile"),
    local: document.querySelector(".local-tile"),
    screen: ui.screenTile,
  };
  const labelMap = {
    remote: "Remote video full screen",
    local: "Your video full screen",
    screen: "Shared screen full screen",
  };
  const tile = tileMap[tileName];
  if (!tile || tile.hidden) {
    toast("Fullscreen is not available for this tile right now.", "error");
    return;
  }
  const video = tile.querySelector("video.is-live, video");
  requestFullscreenFor(video || tile, labelMap[tileName] || "Full screen");
}

async function leaveMeeting() {
  ui.hangupBtn.disabled = true;
  state.endingLocally = true;
  state.lastMeetingSummary = collectMeetingSummary();
  setAppStatus("Leaving meeting...", "loading");
  try {
    removeFirebaseListeners();
    if (state.roomRef) {
      await state.roomRef.child(`participants/${state.peerId}`).remove().catch(() => {});
      if (state.role === "host") {
        await state.roomRef.update({
          status: "ended",
          endedAt: firebase.database.ServerValue.TIMESTAMP,
          endedBy: state.peerId,
          updatedAt: firebase.database.ServerValue.TIMESTAMP,
        }).catch(() => {});
        await state.roomRef.child("joinRequests").remove().catch(() => {});
      }
    }
  } catch (error) {
    console.warn(error);
  }

  if (state.pc) {
    state.pc.getSenders().forEach((sender) => { try { sender.track?.stop(); } catch (_) {} });
    state.pc.close();
  }
  stopLocalMedia();

  state.roomId = null;
  state.role = null;
  state.roomRef = null;
  state.pc = null;
  state.remoteStream = new MediaStream();
  state.hasRemoteParticipant = false;
  state.remoteParticipant = null;
  state.participants = {};
  state.pendingJoinRequests = [];
  state.activeJoinRequest = null;
  state.waitingForAdmission = false;
  state.roomLocked = false;
  state.chatEnabled = true;
  state.guestScreenShareEnabled = true;
  state.meetingStartedAt = null;
  state.chatMessageCount = 0;
  state.screenShareUsed = false;
  state.handRaised = false;
  state.chatKeys.clear();
  state.reactionKeys.clear();
  setUnreadChatCount(0);
  ui.localVideo.srcObject = null;
  ui.remoteVideo.srcObject = null;
  ui.chatMessages.innerHTML = "";
  if (ui.chatPopups) ui.chatPopups.innerHTML = "";
  if (ui.reactionStream) ui.reactionStream.innerHTML = "";
  toggleReactionPanel(false);
  toggleParticipantsPanel(false);
  toggleNotesPanel(false);
  if (ui.waitingRoomCard) ui.waitingRoomCard.hidden = true;
  updateHandUI();
  if (ui.screenTile) { ui.screenTile.hidden = true; ui.screenTile.dataset.source = ""; }
  if (ui.screenVideo) ui.screenVideo.srcObject = null;
  state.remoteScreenStream = new MediaStream();
  if (ui.devicePanel) ui.devicePanel.hidden = true;
  ui.hangupBtn.disabled = false;
  setAppStatus("Ready", "ready");
  updateUrlRoom(null);
  createFreshCode();
  stopMeetingClock();
  hideInviteCard();
  showView("home");
  toast("You left the meeting.");
  openFeedbackModal();
}

async function handleForcedMeetingExit(message) {
  if (state.endingLocally) return;
  state.endingLocally = true;
  state.lastMeetingSummary = collectMeetingSummary({ exitReason: message });
  ui.hangupBtn.disabled = true;
  setAppStatus(message, "error");

  const roomRef = state.roomRef;
  try {
    removeFirebaseListeners();
    await roomRef?.child(`participants/${state.peerId}`).remove().catch(() => {});
  } catch (error) {
    console.warn(error);
  }

  if (state.pc) {
    state.pc.getSenders().forEach((sender) => { try { sender.track?.stop(); } catch (_) {} });
    state.pc.close();
  }
  stopLocalMedia();

  state.roomId = null;
  state.role = null;
  state.roomRef = null;
  state.pc = null;
  state.remoteStream = new MediaStream();
  state.hasRemoteParticipant = false;
  state.remoteParticipant = null;
  state.participants = {};
  state.pendingJoinRequests = [];
  state.activeJoinRequest = null;
  state.handRaised = false;
  state.roomLocked = false;
  state.chatEnabled = true;
  state.guestScreenShareEnabled = true;
  state.meetingStartedAt = null;
  state.chatMessageCount = 0;
  state.screenShareUsed = false;
  state.chatKeys.clear();
  state.reactionKeys.clear();
  setUnreadChatCount(0);
  ui.localVideo.srcObject = null;
  ui.remoteVideo.srcObject = null;
  ui.chatMessages.innerHTML = "";
  if (ui.chatPopups) ui.chatPopups.innerHTML = "";
  if (ui.reactionStream) ui.reactionStream.innerHTML = "";
  toggleReactionPanel(false);
  toggleParticipantsPanel(false);
  toggleNotesPanel(false);
  if (ui.waitingRoomCard) ui.waitingRoomCard.hidden = true;
  updateHandUI();
  if (ui.screenTile) { ui.screenTile.hidden = true; ui.screenTile.dataset.source = ""; }
  if (ui.screenVideo) ui.screenVideo.srcObject = null;
  state.remoteScreenStream = new MediaStream();
  if (ui.devicePanel) ui.devicePanel.hidden = true;
  ui.hangupBtn.disabled = false;
  updateUrlRoom(null);
  createFreshCode();
  stopMeetingClock();
  hideInviteCard();
  showView("home");
  toast(message, "error", 7000);
  openFeedbackModal();
}

function collectMeetingSummary(extra = {}) {
  const participantCount = Math.max(
    state.participantIdsSeen?.size || 0,
    Object.keys(state.participants || {}).length,
    state.role ? 1 : 0,
  );
  const durationMs = state.meetingStartedAt ? Date.now() - state.meetingStartedAt : 0;
  return {
    roomId: state.roomId || ui.activeRoomCode?.textContent || "",
    hostName: state.hostName || "",
    userName: state.displayName || "Guest",
    role: state.role || "guest",
    duration: formatDuration(durationMs),
    durationMs,
    participantCount,
    chatMessageCount: state.chatMessageCount || 0,
    screenShareUsed: Boolean(state.screenShareUsed),
    endedAt: new Date().toLocaleString(),
    ...extra,
  };
}

function renderMeetingSummary() {
  if (!ui.meetingSummaryBlock || !ui.meetingSummaryList) return;
  const summary = state.lastMeetingSummary;
  if (!summary) {
    ui.meetingSummaryBlock.hidden = true;
    return;
  }
  ui.meetingSummaryBlock.hidden = false;
  const rows = [
    ["Room code", summary.roomId || "-"],
    ["Host", summary.hostName || "-"],
    ["You", summary.userName || "-"],
    ["Duration", summary.duration || "00:00"],
    ["Participants", String(summary.participantCount || 1)],
    ["Chat messages", String(summary.chatMessageCount || 0)],
    ["Screen share used", summary.screenShareUsed ? "Yes" : "No"],
  ];
  if (summary.exitReason) rows.push(["Note", summary.exitReason]);
  ui.meetingSummaryList.innerHTML = "";
  rows.forEach(([label, value]) => {
    const row = document.createElement("div");
    const key = document.createElement("span");
    const val = document.createElement("strong");
    key.textContent = label;
    val.textContent = value;
    row.append(key, val);
    ui.meetingSummaryList.appendChild(row);
  });
}

async function copyMeetingSummary() {
  const summary = state.lastMeetingSummary;
  if (!summary) return;
  const text = [
    "Akaora Meet summary",
    `Room code: ${summary.roomId || "-"}`,
    `Host: ${summary.hostName || "-"}`,
    `You: ${summary.userName || "-"}`,
    `Duration: ${summary.duration || "00:00"}`,
    `Participants: ${summary.participantCount || 1}`,
    `Chat messages: ${summary.chatMessageCount || 0}`,
    `Screen share used: ${summary.screenShareUsed ? "Yes" : "No"}`,
  ].join("\n");
  await copyText(text, "Meeting summary copied");
}

function updateMeetingClock() {
  if (!ui.meetingClock) return;
  const now = new Date();
  const currentTime = now.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
  const duration = state.meetingStartedAt ? formatDuration(Date.now() - state.meetingStartedAt) : "00:00";
  ui.meetingClock.textContent = `${currentTime} | ${duration}`;
}

function startMeetingClock() {
  stopMeetingClock();
  updateMeetingClock();
  state.meetingClockTimer = window.setInterval(updateMeetingClock, 1000);
}

function stopMeetingClock() {
  if (state.meetingClockTimer) {
    clearInterval(state.meetingClockTimer);
    state.meetingClockTimer = null;
  }
}

function showInviteCard() {
  if (!ui.inviteCard) return;
  ui.inviteCard.hidden = false;
}

function hideInviteCard() {
  if (!ui.inviteCard) return;
  ui.inviteCard.hidden = true;
}

async function shareOrCopyInvite() {
  const url = buildInviteLink();
  const data = { title: 'Join my Akaora Meet', text: `Join my meeting: ${state.roomId || ''}`, url };
  try {
    if (navigator.share) {
      await navigator.share(data);
      setAppStatus('Invite shared', 'ready');
      return;
    }
  } catch (error) {
    console.warn(error);
  }
  await copyText(url, 'Invite link copied');
}

async function togglePresentationAudio() {
  if (!state.localScreenTrack || ui.screenTile?.dataset?.source !== "local") {
    toast("Only the presenter can control presentation audio.");
    return;
  }
  if (!state.localScreenAudioTrack) {
    setAppStatus("No presentation audio track", "ready");
    toast("This browser/source did not provide screen audio. Try sharing a tab or enable system audio when selecting screen.");
    updatePresentationHud();
    return;
  }
  state.localScreenAudioTrack.enabled = !state.localScreenAudioTrack.enabled;
  setAppStatus(state.localScreenAudioTrack.enabled ? "Presentation audio on" : "Presentation audio off", "ready");
  toast(state.localScreenAudioTrack.enabled ? "Presentation audio turned on." : "Presentation audio turned off.");
  await applyLocalTracksToSenders();
  updatePresentationHud();
}

function updatePresentationHud() {
  if (!ui.presentationHud || !ui.presentationAudioState || !ui.presenterPillText) return;
  const hasScreen = !ui.screenTile.hidden;
  const source = ui.screenTile?.dataset?.source || "";
  const isLocal = hasScreen && source === "local";
  const hasLocalAudioTrack = Boolean(state.localScreenAudioTrack);
  const localAudioEnabled = Boolean(state.localScreenAudioTrack && state.localScreenAudioTrack.enabled);
  const hasRemoteAudio = hasScreen && source === "remote";

  ui.presentationHud.hidden = !hasScreen;
  document.body.classList.toggle("screen-share-mode", hasScreen);
  document.body.classList.toggle("local-presenting", isLocal);

  if (hasScreen) {
    if (isLocal) ui.presenterPillText.textContent = `${state.displayName || 'You'} (You, presenting)`;
    else ui.presenterPillText.textContent = `${state.hostName || 'Participant'} is presenting`;
  }

  const audioActive = isLocal ? localAudioEnabled : hasRemoteAudio;
  ui.presentationAudioState.classList.toggle("on", audioActive);
  ui.presentationAudioState.classList.toggle("off", !audioActive);
  ui.presentationAudioPill?.classList.toggle("disabled", isLocal && !hasLocalAudioTrack);
  ui.presentationAudioPill?.setAttribute("aria-pressed", String(audioActive));
  ui.presentationAudioPill?.setAttribute("title", isLocal ? (hasLocalAudioTrack ? "Turn presentation audio on/off" : "No presentation audio track available") : "Remote presentation audio");
  if (ui.stopPresentingBtn) ui.stopPresentingBtn.hidden = !isLocal;
  if (hasScreen) hideInviteCard();
}

function updateScreenPreviewTiles() {
  if (!ui.videoGrid) return;
  const source = ui.screenTile?.dataset?.source || "";
  const previews = [];
  const remoteTile = ui.videoGrid.querySelector('.remote-tile');
  const localTile = ui.videoGrid.querySelector('.local-tile');
  if (!ui.screenTile.hidden) {
    if (source === 'local') {
      if (localTile && !localTile.hidden) previews.push(localTile);
      if (remoteTile && !remoteTile.hidden) previews.push(remoteTile);
    } else if (source === 'remote') {
      if (localTile && !localTile.hidden) previews.push(localTile);
      if (remoteTile && !remoteTile.hidden) previews.push(remoteTile);
    }
  }
  [remoteTile, localTile].forEach((tile) => tile && tile.removeAttribute('data-preview-index'));
  previews.forEach((tile, index) => tile?.setAttribute('data-preview-index', String(index)));
}

function openFeedbackModal() {
  if (!ui.meetingEndedModal) return;
  resetFeedbackModal();
  renderMeetingSummary();
  ui.meetingEndedModal.hidden = false;
  document.body.classList.add("modal-open");
  ui.feedbackInput?.focus();
}

function closeFeedbackModal() {
  if (!ui.meetingEndedModal) return;
  ui.meetingEndedModal.hidden = true;
  document.body.classList.remove("modal-open");
}

function resetFeedbackModal() {
  state.feedbackRating = 0;
  if (ui.feedbackInput) ui.feedbackInput.value = "";
  setFeedbackRating(0);
  if (ui.submitFeedbackBtn) {
    ui.submitFeedbackBtn.disabled = false;
    ui.submitFeedbackBtn.innerHTML = `<svg viewBox="0 0 24 24"><path d="M22 2 11 13"/><path d="m22 2-7 20-4-9-9-4 20-7Z"/></svg>Submit feedback`;
  }
}

function setFeedbackRating(value = 0) {
  state.feedbackRating = Math.max(0, Math.min(5, Number(value) || 0));
  ui.feedbackRatingButtons?.forEach((button) => {
    const rating = Number(button.dataset.rating || 0);
    button.classList.toggle("active", rating <= state.feedbackRating && state.feedbackRating > 0);
  });
}

async function submitFeedback() {
  if (!state.db) {
    toast("Feedback saved locally. Firebase is not ready.");
    closeFeedbackModal();
    return;
  }
  try {
    if (ui.submitFeedbackBtn) {
      ui.submitFeedbackBtn.disabled = true;
      ui.submitFeedbackBtn.innerHTML = loadingIcon("Sending...");
    }
    const payload = {
      roomId: state.lastMeetingSummary?.roomId || "",
      role: state.lastMeetingSummary?.role || "guest",
      name: state.lastMeetingSummary?.displayName || state.displayName || "Guest",
      hostName: state.lastMeetingSummary?.hostName || state.hostName || "",
      rating: state.feedbackRating || null,
      message: ui.feedbackInput?.value.trim() || "",
      summary: state.lastMeetingSummary || null,
      createdAt: firebase.database.ServerValue.TIMESTAMP,
      source: "akaora-meet-web",
    };
    await state.db.ref(`feedback/${makeId(18)}`).set(payload);
    setAppStatus("Feedback sent", "ready");
    toast("Thanks for your feedback.");
    closeFeedbackModal();
  } catch (error) {
    console.warn(error);
    setAppStatus("Failed • Feedback not sent", "error");
    toast("Could not send feedback right now.", "error");
    if (ui.submitFeedbackBtn) {
      ui.submitFeedbackBtn.disabled = false;
      ui.submitFeedbackBtn.innerHTML = `<svg viewBox="0 0 24 24"><path d="M22 2 11 13"/><path d="m22 2-7 20-4-9-9-4 20-7Z"/></svg>Submit feedback`;
    }
  }
}

async function safeCleanupAfterFailedStart() {
  removeFirebaseListeners();
  if (state.pc) state.pc.close();
  stopLocalMedia();
  if (state.role === "host" && state.roomRef) {
    await state.roomRef.remove().catch(() => {});
  }
  state.pc = null;
  state.roomRef = null;
  state.roomId = null;
}

function stopLocalMedia() {
  [state.currentAudioTrack, state.currentVideoTrack, state.localScreenTrack, state.localScreenAudioTrack].forEach((track) => {
    try { track?.stop(); } catch (_) {}
  });
  state.localScreenStream?.getTracks().forEach((track) => { try { track.stop(); } catch (_) {} });
  state.currentAudioTrack = null;
  state.currentVideoTrack = null;
  state.localScreenTrack = null;
  state.localScreenAudioTrack = null;
  state.localScreenStream = null;
  state.localStream?.getTracks().forEach((track) => {
    try { track.stop(); } catch (_) {}
  });
  state.localStream = new MediaStream();
}

function removeFirebaseListeners() {
  state.listeners.splice(0).forEach((off) => {
    try { off(); } catch (_) {}
  });
}

function participantPayload(role) {
  return {
    id: state.peerId,
    name: state.displayName,
    role,
    micEnabled: Boolean(state.currentAudioTrack && state.currentAudioTrack.enabled),
    cameraEnabled: Boolean(state.currentVideoTrack && state.currentVideoTrack.enabled),
    screenSharing: Boolean(state.localScreenTrack),
    raisedHand: Boolean(state.handRaised),
    handRaised: Boolean(state.handRaised),
    handUpdatedAt: firebase.database.ServerValue.TIMESTAMP,
    joinedAt: firebase.database.ServerValue.TIMESTAMP,
    updatedAt: firebase.database.ServerValue.TIMESTAMP,
  };
}

async function updateParticipantPresence(extra = {}) {
  if (!state.roomRef || !state.role || !state.peerId) return;
  try {
    await state.roomRef.child(`participants/${state.peerId}`).update({
      name: state.displayName,
      role: state.role,
      micEnabled: Boolean(state.currentAudioTrack && state.currentAudioTrack.enabled),
      cameraEnabled: Boolean(state.currentVideoTrack && state.currentVideoTrack.enabled),
      screenSharing: Boolean(state.localScreenTrack),
      raisedHand: Boolean(state.handRaised),
      handRaised: Boolean(state.handRaised),
      updatedAt: firebase.database.ServerValue.TIMESTAMP,
      ...extra,
    });
  } catch (error) {
    console.warn("Participant presence update failed", error);
  }
}

function isToggleOn(button) {
  return button.dataset.enabled === "true";
}

function setAppStatus(text, mode = "") {
  const normalizedMode = mode === "error" ? "error" : mode === "connected" ? "connected" : mode === "loading" ? "loading" : "ready";

  if (ui.appStatus) {
    ui.appStatus.childNodes.forEach((node) => {
      if (node.nodeType === Node.TEXT_NODE) node.remove();
    });
    ui.appStatus.className = `status-chip ${normalizedMode}`.trim();
    ui.appStatus.append(` ${text}`);
  }
}

function showDynamicStatus() {
  // The old floating dynamic update bar is intentionally disabled.
}

function toast(message, type = "", duration = 2900) {
  ui.toast.textContent = message;
  ui.toast.className = `toast show ${type}`.trim();
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => {
    ui.toast.className = "toast";
  }, duration);
}

async function copyText(text, successMessage) {
  if (!text) return;
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
    } else {
      const input = document.createElement("textarea");
      input.value = text;
      input.style.position = "fixed";
      input.style.opacity = "0";
      document.body.appendChild(input);
      input.focus();
      input.select();
      document.execCommand("copy");
      input.remove();
    }
    setAppStatus(successMessage, "ready");
    toast(successMessage);
  } catch (error) {
    console.warn(error);
    setAppStatus("Failed • Copy blocked", "error");
    toast("Copy failed. Select and copy manually.", "error");
  }
}

function buildInviteLink() {
  const url = new URL(window.location.href);
  url.searchParams.set("room", state.roomId || "");
  return url.toString();
}

function updateUrlRoom(room) {
  const url = new URL(window.location.href);
  if (room) url.searchParams.set("room", room);
  else url.searchParams.delete("room");
  history.replaceState({}, "", url.toString());
}

function parseRoomId(value) {
  if (!value) return "";
  let raw = String(value).trim();
  try {
    const url = new URL(raw);
    raw = url.searchParams.get("room") || url.hash.replace("#", "") || raw;
  } catch (_) {}
  return raw.toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 12);
}

function makeRoomCode() {
  const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  const values = crypto.getRandomValues(new Uint32Array(8));
  return Array.from(values, (value) => alphabet[value % alphabet.length]).join("");
}

function makeId(length = 12) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz0123456789";
  const values = crypto.getRandomValues(new Uint32Array(length));
  return Array.from(values, (value) => alphabet[value % alphabet.length]).join("");
}

function getInitial(name) {
  const clean = String(name || "Guest").trim();
  return clean ? clean.charAt(0).toUpperCase() : "G";
}

function escapeHtml(value) {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function truncateText(value, maxLength = 96) {
  const text = String(value || "").trim();
  if (text.length <= maxLength) return text;
  return `${text.slice(0, Math.max(0, maxLength - 1)).trim()}...`;
}

function normalizeTimestamp(value) {
  const number = Number(value);
  return Number.isFinite(number) && number > 0 ? number : null;
}

function formatDuration(ms = 0) {
  const totalSeconds = Math.max(0, Math.floor((Number(ms) || 0) / 1000));
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  const mm = String(minutes).padStart(2, "0");
  const ss = String(seconds).padStart(2, "0");
  if (hours > 0) return `${hours}:${mm}:${ss}`;
  return `${mm}:${ss}`;
}

function getReactionInfo(reactionId) {
  const reaction = reactionMap[reactionId];
  if (!reaction) return null;
  return {
    label: reaction.label,
    emoji: String.fromCodePoint(...reaction.codepoints),
  };
}

function loadingIcon(text) {
  return `<svg viewBox="0 0 24 24"><path d="M12 2v4"/><path d="M12 18v4"/><path d="M4.93 4.93l2.83 2.83"/><path d="M16.24 16.24l2.83 2.83"/><path d="M2 12h4"/><path d="M18 12h4"/><path d="M4.93 19.07l2.83-2.83"/><path d="M16.24 7.76l2.83-2.83"/></svg>${escapeHtml(text)}`;
}

window.addEventListener("beforeunload", () => {
  try {
    if (state.roomRef && state.joinRequestId) state.roomRef.child(`joinRequests/${state.joinRequestId}`).remove();
    if (state.roomRef) state.roomRef.child(`participants/${state.peerId}`).remove();
  } catch (_) {}
  stopLocalMedia();
});
