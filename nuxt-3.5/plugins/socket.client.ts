import { io, Socket } from "socket.io-client";

const wsURL = "https://myapi.juchandev.xyz";
const nameSpace = "test";

let socket: Socket;

const init = () => {
  socket = io(`${wsURL}/${nameSpace}`, {
    autoConnect: false,
    transports: ["websocket"],
  });

  connect();
  socketBaseRead();
};

const socketBaseRead = () => {
  socket.on("connect", () => {
    console.log("연결 되었습니다.");
  });

  socket.on("disconnect", (socket: any) => {
    console.log("연결이 끊겼습니다.", socket);
  });
  socket.on("error", (err) => {
    console.log("에러 발생 : ", err);
  });
};

const connect = () => {
  socket.connect();
};

const listenPong = (callback: (paylaod: any) => void) => {
  socket.off("pong");
  socket.on("pong", (payload: any) => {
    callback(payload);
  });
};

const sendPing = (msg: string) => {
  socket.emit("ping", msg);
};

export default defineNuxtPlugin(() => {
  init();
  return {
    provide: {
      socket: {
        connect,
        listenPong,
        sendPing,
      },
    },
  };
});

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $socket: {
      connet: void;
      listenPong: typeof listenPong;
      sendPing: typeof sendPing;
    };
  }
}
