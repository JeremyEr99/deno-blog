import { Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";
import { asset } from "$fresh/src/runtime/utils.ts";
import LemonIcon from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/lemon-2.tsx";
import IconChevronRight from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/chevron-right.tsx";
import IconBrandWhatsapp from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-whatsapp.tsx";
import IconPhoneCall from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/phone-call.tsx";
import IconMail from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/mail.tsx";
import IconDeviceFloppy from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/device-floppy.tsx";
import IconUser from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/user.tsx";
import IconMapPin from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/map-pin.tsx";
import IconWorld from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/world.tsx";
import IconQrcode from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/qrcode.tsx";

type Props = {
  active: string;
};

export default function Home() {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/main.css"></link>
        <link rel="stylesheet" href="/ollie.css"></link>
        <link rel="icon" type="image/jpg" href="/logoRas.png" />
      </Head>

      <body class=" " style="background-color: #d7ecf3">
        <center>
          <div
            class="flex  mx-3 my-3 justify-center items-center  flex-col gap-5 bg-cover bg-center bg-no-repeat bg-gray-100  text-white"
            style="background:#fff;"
          >
            <div class="row w-100 align-items-center">
              <div class="col-md-12">
                <table class="table3">
                  <thead>
                    <tr>
                      <th scope="col">
                        <img src={asset("logo.png")} width="80%" height="30" />
                      </th>
                      <th scope="col">
                        <a
                          href="https://fresh.deno.dev/"
                          class="botonmax block   mx-2 text-green-500 cursor-pointer inline-flex items-center group text-green-800     font-bold"
                        >
                          <img
                            class="imagenmax"
                            src={asset("logoRas.png")}
                            width="30"
                            height="30"
                          />
                          {" "}
                        </a>
                      </th>
                    </tr>
                  </thead>
                </table>
              </div>
            </div>

            <div class="w-full text-center px-3">
              <img src={asset("back01.jpg")} />
            </div>

            <div class="w-full text-center items-center ">
              <center>
                <img
                  class="fotom"
                  src={asset("59.jpg")}
                />
                <h1
                  class="text-4xl inline-block font-semi-bold"
                  style="color:#808080"
                >
                  Blanca <span style="color:#00a7e1">Onofre</span>
                </h1>
                <p class="prueba">
                  <br>Bdm Projects & Europe</br> Oficina México
                </p>
                <div class="row justify-content-center">
                  <div class="col-12">
                    <table class="table2">
                      <thead>
                        <tr>
                          <th scope="col">
                            <a
                              href="https://fresh.deno.dev/"
                              class="iconosocial block  mx-2 text-green-500 cursor-pointer inline-flex items-center group text-green-800 px-3 py-3 rounded-full  font-bold"
                            >
                              <IconPhoneCall
                                class="w-7 h-7"
                                style="color:#fff"
                              />
                              {" "}
                            </a>
                            <br>Llamar</br>
                          </th>
                          <th scope="col">
                            <a
                              href="#"
                              class="iconosocial block  mx-2 text-green-500 cursor-pointer inline-flex items-center group text-green-800 px-3 py-3 rounded-full  font-bold"
                            >
                              <IconBrandWhatsapp
                                class="w-7 h-7"
                                style="color:#fff"
                              />
                              {" "}
                            </a>
                            <br>Whatsapp</br>
                          </th>
                          <th scope="col">
                            <a
                              href="#"
                              class="iconosocial block   mx-2 text-green-500 cursor-pointer inline-flex items-center group text-green-800 px-3 py-3 rounded-full  font-bold"
                            >
                              <IconMail class="w-7 h-7" style="color:#fff" />
                              {" "}
                            </a>
                            <br>E-mail</br>
                          </th>
                          <th scope="col">
                            <a
                              href="#"
                              class="iconosocial block   mx-2  text-green-500 cursor-pointer inline-flex items-center group text-green-800 px-3 py-3 rounded-full  font-bold"
                            >
                              <IconDeviceFloppy
                                class="w-7 h-7"
                                style="color:#fff"
                              />
                              {" "}
                            </a>
                            <br>Guardar</br>
                          </th>
                        </tr>
                      </thead>
                    </table>
                  </div>
                </div>
              </center>
            </div>
            <div class="w-full text-center items-center">
              <div class="w-full text-center items-center px-3">
                <video
                  poster="/poster.jpeg"
                  type="video/mp4;"
                  controls=""
                  crossorigin=""
                  width="100%"
                  src={asset("video1.mp4")}
                >
                </video>
              </div>
            </div>

            <table class="table">
              <thead>
                <tr>
                  <th scope="col">
                    <a
                      href="#"
                      class="block  text-green-500 cursor-pointer inline-flex items-center group text-green-800 px-2     font-bold"
                    >
                      <IconUser class="w-11 h-11" style="color:#fff" />
                      {" "}
                    </a>
                  </th>
                  <th scope="col">
                    <a
                      href="#"
                      class="block  text-green-500 cursor-pointer inline-flex items-center group text-green-800 px-2     font-bold"
                    >
                      <IconMapPin class="w-11 h-11" style="color:#fff" />
                      {" "}
                    </a>
                  </th>
                  <th scope="col">
                    <a
                      href="#"
                      class="block  text-green-500 cursor-pointer inline-flex items-center group text-green-800 px-2     font-bold"
                    >
                      <IconWorld class="w-11 h-11" style="color:#fff" />
                      {" "}
                    </a>
                  </th>
                  <th scope="col">
                    <a
                      href="#popup1"
                      class="block  text-green-500 cursor-pointer inline-flex items-center group text-green-800 px-2     font-bold"
                    >
                      <IconQrcode class="w-11 h-11" style="color:#fff" />
                      {" "}
                    </a>
                  </th>
                </tr>
              </thead>
            </table>
          </div>
        </center>

        <div id="popup1" class="overlay">
          <div class="popup">
            <h2>
              QR VCARD
            </h2>
            <a class="close" href="#">&times;</a>
            <div class="content">
              Lee el QR con tu móvil para añadir los datos del titular de la
              tarjeta en tus contactos. (No incluye foto).
              <img src="https://qrcode.tec-it.com/API/QRCode?data=tel%3a%2b51+977591930&backcolor=%23ffffff&size=Large" />
            </div>
          </div>
        </div>
      </body>
    </>
  );
}
