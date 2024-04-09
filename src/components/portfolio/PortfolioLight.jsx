import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import React, { useState } from "react";
import Modal from "react-modal";
import ModalOneContent from "./modal/ModalOneContent";
import ModalTwoContent from "./modal/ModalTwoContent";
import ModalFiveContent from "./modal/ModalFiveContent";
import ModalSixContent from "./modal/ModalSixContent";
import ModalNineContent from "./modal/ModalNineContent";
import ModalContent from "./modal/ModalContent";

const PortfolioLight = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);
  const [isOpen7, setIsOpen7] = useState(false);
  const [isOpen8, setIsOpen8] = useState(false);
  const [isOpen9, setIsOpen9] = useState(false);
  const [isOpen10, setIsOpen10] = useState(false);
  const [isOpen11, setIsOpen11] = useState(false);
  const [isOpen12, setIsOpen12] = useState(false);
  const [isOpen13, setIsOpen13] = useState(false);
  const [isOpen14, setIsOpen14] = useState(false);
  const [isOpen15, setIsOpen15] = useState(false);
  const [isOpen16, setIsOpen16] = useState(false);
  const [isOpen17, setIsOpen17] = useState(false);
  const [isOpen18, setIsOpen18] = useState(false);
  const [isOpen19, setIsOpen19] = useState(false);
  const [isOpen20, setIsOpen20] = useState(false);

  const toggleModalOne = () => setIsOpen(!isOpen);

  const toggleModalTwo = () => setIsOpen2(!isOpen2);

  const toggleModalThree = () => setIsOpen3(!isOpen3);

  const toggleModalFour = () => setIsOpen4(!isOpen4);

  const toggleModalFive = () => setIsOpen5(!isOpen5);

  const toggleModalSix = () => setIsOpen6(!isOpen6);

  const toggleModalSeven = () => setIsOpen7(!isOpen7);

  const toggleModalEight = () => setIsOpen8(!isOpen8);

  const toggleModalNine = () => setIsOpen9(!isOpen9);

  const toggleModalTen = () => setIsOpen10(!isOpen10);
  const toggleModalEleven = () => setIsOpen11(!isOpen11);
  const toggleModalTwelve = () => setIsOpen12(!isOpen12);
  const toggleModalThirteen = () => setIsOpen13(!isOpen13);
  const toggleModalFourteen = () => setIsOpen14(!isOpen14);
  const toggleModalFifteen = () => setIsOpen15(!isOpen15);
  const toggleModalSixteen = () => setIsOpen16(!isOpen16);
  const toggleModalSeventeen = () => setIsOpen17(!isOpen17);
  const toggleModalEighteen = () => setIsOpen18(!isOpen18);
  const toggleModalNineteen = () => setIsOpen19(!isOpen19);
  const toggleModalTwenty = () => setIsOpen20(!isOpen20);

  const Item = ({ toggleModel, isOpen, img, modalContent, name }) => {
    return (
      <li data-aos="fade-right" data-aos-duration="1200" data-aos-delay="0">
        <figure onClick={toggleModel}>
          <img src={img} alt="Portolio" width={"100%"} height={"230px"} />
          <div className=" hover-content-wrapper">
            <span className="content-title">{name}</span>
          </div>
        </figure>

        {/* Start ModalOneContent */}
        <Modal
          isOpen={isOpen}
          onRequestClose={toggleModel}
          contentLabel="My dialog"
          className="custom-modal dark"
          overlayClassName="custom-overlay dark"
          closeTimeoutMS={500}
        >
          <div>
            <button className="close-modal" onClick={toggleModel}>
              <img src="/img/cancel.svg" alt="close icon" />
            </button>
            {/* End close icon */}

            <div className="box_inner portfolio">{modalContent}</div>
          </div>
        </Modal>
        {/* End  ModalOneContent */}
      </li>
    );
  };

  const getAndroidIOSUrls = (iOS, android) => {
    return [
      { name: "iOS", url: iOS },
      { name: "android", url: android },
    ];
  };
  const webProjects = [
    {
      img: "img/projects/slaybids_0.png",
      isOpen: isOpen19,
      toggleModel: toggleModalNineteen,
      modalContent: (
        <ModalContent
          name={"Slaybids Web App"}
          description={
            "Dring is digital app that facilitate the ordering and delivery of goods and services to consumers' doorsteps."
          }
          images={[
            "img/projects/slaybids_0.png",
            "img/projects/slaybids_1.png",
            "img/projects/slaybids_2.png",
          ]}
          technologies={["Reactjs", "Nextjs", "Nodejs"]}
          urls={[
            {
              name: "website",
              url: "https://dring-admin-local-fkxu.vercel.app/",
            },
          ]}
        />
      ),
      name: "Slaybids Web App",
    },
    {
      img: "img/projects/dring_web_1.png",
      isOpen: isOpen19,
      toggleModel: toggleModalNineteen,
      modalContent: (
        <ModalContent
          name={"Dring Admin Web App"}
          description={
            "Dring is digital app that facilitate the ordering and delivery of goods and services to consumers' doorsteps."
          }
          images={[
            "img/projects/dring_web_0.png",
            "img/projects/dring_web_1.png",
          ]}
          technologies={["Reactjs", "Nextjs", "Nodejs"]}
          urls={[
            {
              name: "website",
              url: "https://dring-admin-local-fkxu.vercel.app/",
            },
          ]}
        />
      ),
      name: "Dring Admin Web App",
    },
    {
      img: "img/projects/dring_web_1.png",
      isOpen: isOpen19,
      toggleModel: toggleModalNineteen,
      modalContent: (
        <ModalContent
          name={"Dring Admin Web App"}
          description={
            "Dring is digital app that facilitate the ordering and delivery of goods and services to consumers' doorsteps."
          }
          images={[
            "img/projects/dring_web_0.png",
            "img/projects/dring_web_1.png",
          ]}
          technologies={["Reactjs", "Nextjs", "Nodejs"]}
          urls={[
            {
              name: "website",
              url: "https://dring-admin-local-fkxu.vercel.app/",
            },
          ]}
        />
      ),
      name: "Dring Admin Web App",
    },
    {
      img: "img/projects/dring_web_0.png",
      isOpen: isOpen17,
      toggleModel: toggleModalSeventeen,
      modalContent: (
        <ModalContent
          name={"Dring Business Web App"}
          description={
            "Dring is digital app that facilitate the ordering and delivery of goods and services to consumers' doorsteps."
          }
          images={[
            "img/projects/dring_web_1.png",
            "img/projects/dring_web_0.png",
          ]}
          technologies={["Reactjs", "Nextjs", "Nodejs"]}
          urls={[
            { name: "website", url: "https://dring-web-soyb.vercel.app/" },
          ]}
        />
      ),
      name: "Dring Business Web App",
    },
    {
      img: "img/projects/medtrans_0.png",
      isOpen: isOpen17,
      toggleModel: toggleModalSeventeen,
      modalContent: (
        <ModalContent
          name={"Medtrans Web App"}
          description={
            "Medtrans has over 20 years of providing professional transportation services to partnering hospitals and communities. Services include,"
          }
          images={[
            "img/projects/medtrans_1.png",
            "img/projects/medtrans_2.png",
          ]}
          technologies={["Reactjs", "Nextjs", "Nodejs"]}
          urls={[{ name: "website", url: "https://medtranslocal.vercel.app/" }]}
        />
      ),
      name: "Medtrans Web App",
    },
    {
      img: "img/projects/hoyzee_admin_0.png",
      isOpen: isOpen16,
      toggleModel: toggleModalSixteen,
      modalContent: (
        <ModalContent
          name={"Hoyzee Admin App"}
          description={
            "Join the food vending community and discover the food Trucks & Food you love near your location, only on Hoyzee!​"
          }
          images={[
            "img/projects/hoyzee_admin_0.png",
            "img/projects/hoyzee_admin_1.png",
          ]}
          technologies={["Reactjs", "Firebase"]}
          urls={[{ name: "website", url: "https://admin.hoyzee.net/" }]}
        />
      ),
      name: "Hoyzee Admin App",
    },
    {
      img: "img/projects/hoyzee_web_0.png",
      isOpen: isOpen15,
      toggleModel: toggleModalFifteen,
      modalContent: (
        <ModalContent
          name={"Hoyzee Web App"}
          description={
            "Join the food vending community and discover the food Trucks & Food you love near your location, only on Hoyzee!​"
          }
          images={[
            "img/projects/hoyzee_web_0.png",
            "img/projects/hoyzee_web_1.png",
            "img/projects/hoyzee_web_2.png",
          ]}
          technologies={["Nodejs"]}
          urls={[{ name: "website", url: "https://hoyzee.net/" }]}
        />
      ),
      name: "Hoyzee Web App",
    },
    {
      img: "img/projects/kaprahub.png",
      isOpen: isOpen,
      toggleModel: toggleModalOne,
      modalContent: <ModalOneContent />,
      name: "Kaprahub Website",
    },

    {
      img: "img/projects/syed_nft.png",
      isOpen: isOpen2,
      toggleModel: toggleModalTwo,
      modalContent: <ModalTwoContent />,
      name: "SyedNFT - Beta",
    },
    {
      img: "img/projects/kaprahub.png",
      isOpen: isOpen,
      toggleModel: toggleModalOne,
      modalContent: <ModalOneContent />,
      name: "Kaprahub Website",
    },
    {
      img: "img/projects/kapra_admin_0.png",
      isOpen: isOpen5,
      toggleModel: toggleModalFive,
      modalContent: <ModalFiveContent />,
      name: "Kaprahub Admin Panel",
    },
  ];

  const mobileProjects = [
    {
      img: "img/projects/vipconnect_0.png",
      isOpen: isOpen14,
      toggleModel: toggleModalFourteen,
      modalContent: (
        <ModalContent
          name={"VipConnect App"}
          description={
            "VIP Connect is the official networking app exclusively for Business Technology Consumers. We provide a safe, non-soliciting, consumer to consumer experience for all different industries."
          }
          images={["img/projects/vipconnect_0.png"]}
          technologies={["Flutter", "Dart", "Firebase"]}
          urls={getAndroidIOSUrls(
            "https://apps.apple.com/us/app/vip-connect/id6446575274",
            "https://play.google.com/store/apps/details?id=com.vipconnect.app.vip_connect",
          )}
        />
      ),
      name: "Me3mari App",
    },
    {
      img: "img/projects/construcion_1.jpeg",
      isOpen: isOpen13,
      toggleModel: toggleModalThirteen,
      modalContent: (
        <ModalContent
          name={"Me3mari App"}
          description={
            "Me3mari is the first App in the construction industry in Saudi Arabia that creates a central collaboration hub for homeowners, design offices, contractors, and material suppliers."
          }
          images={[
            "img/projects/construcion_0.jpeg",
            "img/projects/construcion_1.jpeg",
            "img/projects/construcion_2.jpeg",
          ]}
          technologies={["Flutter", "Dart", "Firebase"]}
          urls={getAndroidIOSUrls(
            "https://apps.apple.com/pk/app/me3mari/id6474303131?platform=iphone",
            "https://play.google.com/store/apps/details?id=com.fusion_wave.construction_app",
          )}
        />
      ),
      name: "Me3mari App",
    },
    {
      img: "img/projects/rydell.png",
      isOpen: isOpen12,
      toggleModel: toggleModalTwelve,
      modalContent: (
        <ModalContent
          name={"Ryddel APP"}
          description={
            "Ryddel is the “IDK” Killer! No more difficult decisions! Let each person choose based on the strength of their preference to reach the ideal decision quickly and easily?"
          }
          images={["img/projects/rydell.png"]}
          technologies={["Flutter", "Dart", "Firebase"]}
          urls={getAndroidIOSUrls(
            "https://apps.apple.com/us/app/ryddel/id6476131835",
            "https://play.google.com/store/apps/details?id=com.ryddel.app",
          )}
        />
      ),
      name: "Ryddel App",
    },
    {
      img: "img/projects/hoyzee_0.jpeg",
      isOpen: isOpen11,
      toggleModel: toggleModalEleven,
      modalContent: (
        <ModalContent
          name={"HOYZEE APP"}
          description={
            "Hoyzee uses your phone's Internet connection (4G/3G/2G/EDGE or Wi-Fi, as available) to view Food Truck locations, menus, place an order and pay for the order from the App!"
          }
          images={["img/projects/hoyzee_0.jpeg"]}
          technologies={["Flutter", "Dart", "Firebase"]}
          urls={getAndroidIOSUrls(
            "https://apps.apple.com/us/app/hoyzee/id1540325360",
            "https://play.google.com/store/search?q=hoyzee&c=apps",
          )}
        />
      ),
      name: "Hoyzee App",
    },
    {
      img: "img/projects/wico_0.png",
      isOpen: isOpen3,

      toggleModel: toggleModalThree,
      modalContent: (
        <ModalContent
          name={"WiCo Digital"}
          images={["img/projects/wico_1.png", "img/projects/wico_0.png"]}
          technologies={["Flutter", "Dart", "Firebase"]}
          description={
            "By tapping your WiCo on the back of someone’s phone, you can easily share your social media and contact information"
          }
          urls={getAndroidIOSUrls(
            "https://appadvice.com/app/wico-digital/1572301737",
            "https://appadvice.com/app/wico-digital/1572301737",
          )}
        />
      ),
      name: "Wico Digital",
    },

    {
      img: "img/projects/kE_0.jpg",
      isOpen: isOpen4,
      toggleModel: toggleModalFour,
      modalContent: (
        <ModalContent
          name={"KE REALITY - REAL ESTATE"}
          images={[
            "img/projects/kE_0.jpg",
            "img/projects/kE_1.jpg",
            "img/projects/kE_2.jpg",
          ]}
          description={
            "KE Reality is Real Estate App that helps you to find the best property for you & you can also list your property for sale or rent."
          }
          technologies={["Flutter", "Dart", "Firebase"]}
          urls={getAndroidIOSUrls(
            "https://apps.apple.com/us/app/keReality/id1540325360",
            "https://play.google.com/store/search?q=kEReality&c=apps",
          )}
        />
      ),
      name: "KE Reality",
    },

    {
      img: "img/projects/travall_0.jpg",
      isOpen: isOpen7,
      toggleModel: toggleModalSeven,
      modalContent: (
        <ModalContent
          name={"Traval - Hotel Booking App"}
          images={["img/projects/travall_0.jpg"]}
          description={
            "Travall.pk is an online travelling related classified ad posting platform with endless possibilities. It provides end users with everything related to travelling, from visa/ passport consultancy service providers to the ticket booking service providers."
          }
          technologies={["Flutter", "Dart", "Firebase"]}
          urls={getAndroidIOSUrls(
            "https://play.google.com/store/apps/details?id=com.app.ivytravall",
            "https://play.google.com/store/apps/details?id=com.app.ivytravall",
          )}
        />
      ),
      name: "Traval App",
    },

    {
      img: "img/projects/rando_1.png",
      isOpen: isOpen8,
      toggleModel: toggleModalEight,
      modalContent: (
        <ModalContent
          name={"Rando Anonymous App"}
          description={
            "An anonymous chat app that connects you with random people,a chat room for users to connect & talk with each other"
          }
          images={["img/projects/rando.png", "img/projects/rando_1.png"]}
          technologies={["Flutter", "Dart", "Firebase"]}
          urls={getAndroidIOSUrls(
            "https://apps.apple.com/store/us/app/rando/id123123123123",
            "https://play.google.com/store/apps/details?id=com.app.ivytravall",
          )}
        />
      ),
      name: "Rando - Anyonmous Chat",
    },
  ];

  const justUiDesignProjects = [
    {
      img: "img/projects/barbar_0.png",
      isOpen: isOpen6,
      toggleModel: toggleModalSix,
      modalContent: <ModalSixContent />,
      name: "Barbar App UI & UX",
    },

    {
      img: "img/projects/news_0.png",
      isOpen: isOpen9,
      toggleModel: toggleModalNine,
      modalContent: <ModalNineContent />,
      name: "News App",
    },
  ];

  const commingSoonProjects = [
    {
      img: "img/projects/comming_soon.png",
      name: "Coming Soon!",
    },

    {
      img: "img/projects/comming_soon.png",
      name: "Coming Soon!",
    },

    {
      img: "img/projects/comming_soon.png",
      name: "Coming Soon!",
    },
  ];

  const allData = [...webProjects, ...mobileProjects];

  return (
    <Tabs>
      <TabList className="portfolio-tab-list">
        <Tab>ALL({allData.length})</Tab>
        <Tab>WEBSITE({webProjects.length})</Tab>
        <Tab>MOBILE({mobileProjects.length})</Tab>
        <Tab>JUST UI DESIGN (FLUTTER / Nextjs)</Tab>
        <Tab>GAMES</Tab>
      </TabList>

      <div className="portfolio-tab-content">
        <TabPanel>
          <ul className="row grid justify-content-center">
            {allData.map(
              ({ img, isOpen, toggleModel, modalContent, name }, i) => {
                return (
                  <Item
                    key={i}
                    img={img}
                    isOpen={isOpen}
                    toggleModel={toggleModel}
                    modalContent={modalContent}
                    name={name}
                  />
                );
              },
            )}
          </ul>
        </TabPanel>
        <TabPanel>
          <ul className="row grid justify-content-center">
            {webProjects.map(
              ({ img, isOpen, toggleModel, modalContent, name }, i) => {
                return (
                  <Item
                    key={i}
                    img={img}
                    isOpen={isOpen}
                    toggleModel={toggleModel}
                    modalContent={modalContent}
                    name={name}
                  />
                );
              },
            )}
          </ul>
        </TabPanel>

        <TabPanel>
          <ul className="row grid justify-content-center">
            {mobileProjects.map(
              ({ img, isOpen, toggleModel, modalContent, name }, i) => {
                return (
                  <Item
                    key={i}
                    img={img}
                    isOpen={isOpen}
                    toggleModel={toggleModel}
                    modalContent={modalContent}
                    name={name}
                  />
                );
              },
            )}
          </ul>
        </TabPanel>

        <TabPanel>
          <ul className="row grid justify-content-center">
            {justUiDesignProjects.map(
              ({ img, isOpen, toggleModel, modalContent, name }, i) => {
                return (
                  <Item
                    key={i}
                    img={img}
                    isOpen={isOpen}
                    toggleModel={toggleModel}
                    modalContent={modalContent}
                    name={name}
                  />
                );
              },
            )}
          </ul>
        </TabPanel>

        <TabPanel>
          <ul className="row grid justify-content-center">
            {commingSoonProjects.map(
              ({ img, isOpen, toggleModel, modalContent, name }, i) => {
                return (
                  <Item
                    key={i}
                    img={img}
                    isOpen={isOpen}
                    toggleModel={toggleModel}
                    modalContent={modalContent}
                    name={name}
                  />
                );
              },
            )}
          </ul>
        </TabPanel>
      </div>
    </Tabs>
  );
};
export default PortfolioLight;
