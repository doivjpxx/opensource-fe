import React, { useEffect, useRef } from "react";
import "../showcase.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "../components/button.js";
import ShowCaseM from "./ShowCaseMobile/ShowCaseM";
import {Link} from "react-router-dom"
import { useAppContext } from "../contexts/appcontext.js";

const Showcase = ({ showcasedata, dataHeight, ell, sci}) => {
  const { isMobile,changeScPointer} = useAppContext();

  const el = useRef();
  // const q = gsap.utils.selector(el);
  gsap.registerPlugin(ScrollTrigger);

  // const [set, setset] = useState(false);

  useEffect(() => {
    // if (!isMobile) {
    //   const imgTrigger = q(".show-images");
    //   const imageArrayfull = q(".show-image");
    //   const imagewrap = q(".show-img-contain");
    //   const endTr = q(".show-text-contain");

    //   gsap.set(imageArrayfull, {
    //     zIndex: (i, target, targets) => targets.length - i,
    //   });

    //   const images = q(".show-image:not(.end)");

    //   images.forEach((image, i) => {
    //     const nextImage = image.nextElementSibling;

    //      imageTimeline.current = gsap.timeline({
    //       scrollTrigger: {
    //         scroller: "[data-scroll-container]",
    //         trigger: imgTrigger,
    //         start: () => "top -" + window.innerHeight * i,
    //         endTrigger: endTr,
    //         end: () => "+=" + window.innerHeight,
    //         scrub: true,
    //         // invalidateOnRefresh: true,
    //         // markers:true,
    //         anticipatePin: 10,
    //         // onEnter: () => console.log(images),
    //       },
    //     })

    //     .fromTo(
    //       image,
    //       {
    //         height: () => {
    //           return "100%";
    //         },
    //         y: () => {
    //           return 0;
    //         },
    //       },
    //       {
    //         height: () => {
    //           return "0%";
    //         },
    //         y: () => {
    //           return -20;
    //         },
    //         ease: "none",
    //       },
    //       0
    //     )
    //     // .fromTo(
    //     //   nextImage,
    //     //   {
    //     //     y: () => {
    //     //       return 20;
    //     //     },
    //     //   },
    //     //   {
    //     //     y: () => {
    //     //       return 0;
    //     //     },
    //     //     ease: "none",
    //     //   },
    //     //   0
    //     // );

    //     .fromTo(
    //       image,
    //       {
    //         height: () => {
    //           return "100%";
    //         },
    //       },
    //       {
    //         height: () => {
    //           return "0%";
    //         },
    //         ease: "none",
    //       },
    //       0
    //     );
    //   });

    //   ScrollTrigger.create({
    //     scroller:"[data-scroll-container]",
    //     trigger: imagewrap,
    //     start: () => "center center",
    //     endTrigger: endTr,
    //     end: () => "bottom bottom",
    //     pin: imagewrap,
    //     id: "pinSc",
    //     onEnter: ()=> console.log("pinning showcase"),
    //     anticipatePin: 1,
    //     pinReparent:true,
    //     // markers:true,
    //   });

    //   ScrollTrigger.create({
    //     scroller:"[data-scroll-container]",
    //     trigger: imgTrigger,
    //     id: "backBlackGrad",
    //     start: () => "center bottom",
    //     endTrigger: endTr,
    //     end: () => "bottom+=14% bottom-=20%",
    //     onLeave: () =>
    //       gsap.to(q(".show-back"), {
    //         // backgroundImage:
    //         //   "linear-gradient(90deg, rgb(0 0 0)  0%, rgb(0 0 0) 100%)",
    //         opacity:0,
    //         ease: "none",
    //         duration: .6,
    //       }),
    //     onLeaveBack: () =>
    //       gsap.to(q(".show-back"), {
    //         // backgroundImage: "linear-gradient(90deg,  #000  0%, #000 100%)",
    //         opacity:0,
    //         autoAlpha: 0,
    //         ease: "none",
    //         duration: .6,
    //       }),
    //       // markers: true,
    //     invalidateOnRefresh: true,
    //     // markers:true,
    //   });
      
    //   // ScrollTrigger.refresh();
    //   setset(true);
    // // }
    // const texts = q(".grid-text-contain .span-back");

    //  texts.forEach((txt) => {
    //   const creategrad = (rcolor, lcolor) => {
    //     const gra =
    //       "linear-gradient(90deg," + rcolor + " 0%," + lcolor + " 100%)";
    //     return gra;
    //   };

    //   function updateBodyColor(color) {
    //     var cr = txt.dataset.cr;
    //     var cl = txt.dataset.cl;
    //     // changePointer({isHover: true, bg: })
    //     gsap.to(q(".show-back"), {
    //       backgroundImage: () => creategrad(cr, cl),
    //       ease: "none",
    //       autoAlpha: 1,
    //       background: "transparent",
    //     });
    //   }

    //   ScrollTrigger.create({
    //     scroller:"[data-scroll-container]",
    //     trigger: txt,
    //     start: () => "top bottom-=10%",
    //     end: () => "bottom top",
    //     // scrub: true,
    //     // markers:true,
    //     id: "showcaseGradient",
    //     invalidateOnRefresh: true,
    //     onEnter: () => updateBodyColor(),
    //     onEnterBack: () => updateBodyColor(),
    //     // onLeave: ()=> gsap.to( q(".show-back"), {background: "#000", ease: 'none', duration: 1,})
    //   });
    // });
    // console.log("running showcase")
    // return()=>{
    //    if (ScrollTrigger.getById("showcaseGradient")) {
    //       ScrollTrigger.getById("showcaseGradient").kill();
    //     }
    //   if (ScrollTrigger.getById("backBlackGrad")) {
    //       ScrollTrigger.
    //       getById("backBlackGrad").kill();
    //   }
    //   if (ScrollTrigger.getById("pinSc")) {
    //       ScrollTrigger.
    //       getById("pinSc").kill();
    //   }
    //   ScrollTrigger.refresh();
    //   console.log("cleaning showcase 3")
    //   // setset(false)
    // }
  }, []);

  return (
    <section
      style={{ marginTop: 0 }}
      className="showcase-pin"
      ref={el}
      dataheight={dataHeight}
      
    >
      {isMobile && <ShowCaseM showcasedata={showcasedata} />}

      {!isMobile && (
        <>
          <div className="show-text" data-scroll id={sci}>
            <div className="show-text-contain">
              {showcasedata.map((item, idx) => {
                const { num, h4, p, a, img, desc, id } = item;
                const {bg, tx, br, cur} = img.colors;
                return (
                  <div key={id+idx}>
                    <div className="grid-text-contain text">
                      <span
                        className={`span-back ${img.klass}`}
                        data-bg={bg}
                        data-cur={cur}
                        style={tx? {color: tx}: {}}
                      >
                        {num}
                      </span>
                      <h4 style={num === "" ? { marginTop: "110px" } : {}}>
                        {h4}
                      </h4>
                      <p className="desc">
                        {desc}
                      </p>
                      {p === "" ? null : <p>{p}</p>}
                      <Button
                        did={id}
                        active={true}
                        url={a.url}
                        text="View more"
                        br={br? br: null}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className={dataHeight=== "200vh"? "show-images r0" : "show-images r1"}>
            <div className="show-img-contain" data-scroll data-scroll-sticky data-scroll-target={`#${sci}`} data-scroll-offset="0%,40%">
              {showcasedata.map((item, idx) => {
                const { img, id } = item;

                const {
                  cover,
                  klass,
                  colors: { pointer },
                } = img;
                return (
                  <Link key={id} to={item.a.url}>
                  <div  
                  className={klass + " show-image fixed"}
                  style={{backgroundImage:" url(" +cover+")"}}
                  onMouseOver={()=> changeScPointer({ isHover: true, color:{bg: pointer, txt: "#ffffff"}, text: "Click"})}
                  onMouseLeave={()=> changeScPointer({isHover: false, text:""})}
                  >
                  </div>
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="show-back"></div>
        </>
      )}
    </section>
  );
};
export default Showcase;
