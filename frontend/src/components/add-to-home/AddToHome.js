import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { installStandAlone } from "../../redux/features/control/controlSlice";
import IOSModalContent from "../install-pwa-modal/IOSModalContent";
import ModalContent from "../install-pwa-modal/ModalContent";
import NwModal from "../install-pwa-modal/nwModal";
import { useCookies } from "react-cookie";

// container element that handles closing of the modal.

export default function AddToHome() {
  const dispatch = useDispatch();
  // only show this component on the desktop. This button is not compatible on mobile
  const [showInstallMessage, setShowInstallMessage] = useState(false);
  const [closed, setClosed] = useState(false);
  const [cookies, setCookie] = useCookies(["installedStandAlone"]);

  const { deviceType, IOSstandAloneMode, isIOSDevice, installedStandAlone } =
    useSelector((state) => state.control);

  const onDesktop = deviceType === "desktop";

  const bodyText = ` Hi first time ${
    isIOSDevice ? "IOS-Device" : ""
  } visitor! This
  is my web portfolio! If you would like to download the ${" "}
  ${onDesktop ? " standalone desktop " : " mobile app "}
  version of this portfolio`;

  useEffect(() => {
    function handleCookie() {
      setCookie("installedStandAlone", true, {
        path: "/",
      });
    }
    // wait 1 second before showing the install message modal
    async function showInstallMessageModal() {
      try {
        setTimeout(() => {
          setShowInstallMessage(true);
        }, 2000);
      } catch (error) {
        console.error(error);
        setShowInstallMessage(false);
      }
    }

    document.body.addEventListener("click", async (event) => {
      // only if the add to home button is clicked.
      if (event.target.classList.contains("add-to-home")) {
        const promptEvent = window.deferredPrompt;
        if (!promptEvent) {
          return;
        }
        event.target.disabled = true;
        promptEvent.prompt();
        event.target.disabled = false;
        window.deferredPrompt = null;
        event.target.classList.toggle("hidden", true);
      }
    });

    window.addEventListener("appinstalled", (event) => {
      dispatch(installStandAlone());
      handleClose();
      handleCookie();
      window.deferredPrompt = null;
    });

    // Checks if should display install popup notification:
    if (!IOSstandAloneMode) {
      showInstallMessageModal();
    }
    // add cleanup
  }, [dispatch, IOSstandAloneMode, setCookie]);

  const handleClose = () => {
    setClosed(true);
  };

  return (
    <div
      style={{
        position: " absolute",
        top: "15%",
        zIndex: closed ? "-1" : "1000",
        display: closed ? "none" : "flex",
        justifyContent: closed ? undefined : "center",
        width: "100%",
      }}
    >
      {showInstallMessage && !installedStandAlone ? (
        <NwModal
          handleClose={handleClose}
          title={`Installing ${
            onDesktop ? " Standalone Desktop " : " Mobile App "
          } Version`}
          body={bodyText}
          content={
            !IOSstandAloneMode ? (
              isIOSDevice ? (
                <IOSModalContent />
              ) : onDesktop ? (
                <ModalContent />
              ) : undefined
            ) : undefined
          }
        />
      ) : undefined}
    </div>
  );
}

// if first time user on IOS show a modal and have the steps to add the application to your home screen

// if first time user on desktop show a modal and have the button to add the app to your computers' applications
