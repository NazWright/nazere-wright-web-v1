import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Button } from "react-bootstrap";
import { FiShare } from "react-icons/fi";
import { CgAddR } from "react-icons/cg";
import { installStandAlone } from "../../redux/features/control/controlSlice";

export default function AddToHome() {
  const dispatch = useDispatch();
  // only show this component on the desktop. This button is not compatible on mobile
  const { deviceType, IOSstandAloneMode, isIOSDevice } = useSelector(
    (state) => state.control
  );
  const [showInstallMessage, setShowInstallMessage] = useState(false);
  const [closed, setClosed] = useState(false);

  useEffect(() => {
    document.body.addEventListener("click", async (event) => {
      // only if the add to home button is clicked.
      if (event.target.id === "add-to-home") {
        const promptEvent = window.deferredPrompt;
        if (!promptEvent) {
          return;
        }
        event.target.disabled = true;
        promptEvent.prompt();

        const result = await promptEvent.userChoice;
        console.log("👍", "userChoice", result);

        event.target.disabled = false;
        window.deferredPrompt = null;
        event.target.classList.toggle("hidden", true);
      }
    });

    window.addEventListener("appinstalled", (event) => {
      console.log("👍", "appinstalled", event);
      dispatch(installStandAlone());
      handleClose();
      // Clear the deferredPrompt so it can be garbage collected
      window.deferredPrompt = null;
    });

    // Checks if should display install popup notification:
    if (!IOSstandAloneMode) {
      showInstallMessageModal();
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
  });

  const handleClose = () => {
    // dispatch an action to show the breadcrumb
    // close the message modal
    setClosed(true);
  };

  const modalContent = () => {
    if (isIOSDevice && !IOSstandAloneMode) {
      return (
        <p>
          follow these steps:
          <ol>
            <li>
              Press the {<FiShare />} "Share" button at the bottom of your web
              broswer.
            </li>
            <li>Select the {<CgAddR />} "Add to Home Screen" option </li>
            <li>Click "Add" in the top right hand corner.</li>
          </ol>
          Thank you so much!
        </p>
      );
    } else if (deviceType === "desktop" && !IOSstandAloneMode) {
      return (
        <div>
          <div className="d-flex justify-content-center">
            <p>
              Click the button to the right to install the standalone version of
              the app
            </p>
            <button id="add-to-home">Add Application to Desktop</button>
          </div>
        </div>
      );
    }
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
      {closed && deviceType === "desktop" && (
        <button id="add-to-home">Add App To Home Screen</button>
      )}

      {showInstallMessage ? (
        <Modal.Dialog
          style={{
            boxShadow: "2px 3px 3px black",
            width: "80%",
          }}
        >
          <Modal.Header>
            <Modal.Title>
              Installing
              {deviceType === "desktop"
                ? " Standalone Desktop "
                : " Mobile App "}
              Version
            </Modal.Title>
          </Modal.Header>

          <Modal.Body
            style={{
              height: "400px",
            }}
          >
            <p>
              Hi first time {isIOSDevice ? "IOS-Device" : undefined} visitor!
              This is my web portfolio! If you would like to download the{" "}
              {deviceType === "desktop"
                ? " standalone desktop "
                : " mobile app "}
              version of this portfolio
            </p>
            {modalContent()}
          </Modal.Body>

          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal.Dialog>
      ) : undefined}
    </div>
  );
}

// if first time user on IOS show a modal and have the steps to add the application to your home screen

// if first time user on desktop show a modal and have the button to add the app to your computers' applications
