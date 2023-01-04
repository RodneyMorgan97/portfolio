import React, { useState } from "react";
import styles from "./Flower.module.css";
import Modal from "react-modal";

type FlowerProps = {
  text?: string;
  modalText?: string;
  petalColor?: string;
  modalBackgroundColor?: string;
  children?: JSX.Element | JSX.Element[];
};
const FlowerWithModal = (props: FlowerProps) => {
  const petalColor = props.petalColor || "blue-400";
  const [isModalVisible, setIsModalVisible] = useState(false);
  const customStyles: Modal.Styles = {
    content: {
      display: "flex",
      flexDirection: "column" as "column",
      alignItems: "center",
      overflowY: "visible",
      padding: "2rem",
      backgroundColor: props.modalBackgroundColor || "#c0c0c0",
    },
  };
  return (
    <div>
      <div
        className={`${styles.parent} ${styles.flowerAnimation}`}
        onClick={() => {
          setIsModalVisible(true);
        }}
      >
        <div
          className={`w-48 h-16 rounded-full bg-${petalColor} rotate-[60deg] z-1`}
        />
        <div
          className={`w-48 h-16 rounded-full bg-${petalColor} -rotate-[60deg] z-1`}
        />
        <div
          className={`flex w-48 h-16 rounded-full bg-${petalColor} items-center justify-center text text-white z-0 overflow-y-clip`}
        >
          {props?.text}
        </div>
      </div>
      <Modal
        contentLabel="modal"
        appElement={document.getElementById("modal-root") || undefined}
        isOpen={isModalVisible}
        style={customStyles}
        closeTimeoutMS={300}
      >
        <div
          className="absolute w-8 h-8 right-0 top-0 flex justify-center items-center bg-white rounded-[50%] p-2"
          onClick={() => setIsModalVisible(false)}
        >
          <p className={`text-[${props?.modalBackgroundColor}]`}>x</p>
        </div>
        {props?.children}
        <div
          className="flex w-[40%] md:w-[10%] md:h-[5%] justify-center items-center bg-white rounded-lg text-xl m-4 "
          onClick={() => setIsModalVisible(false)}
        >
          <p className={`text-[${props?.modalBackgroundColor}]`}>close</p>
        </div>
      </Modal>
    </div>
  );
};

export default FlowerWithModal;
