import React from "react";
import "../../mystyles/our-member.css";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";

const OUR__MEMBERS = [
  {
    name: "John Nganga",
    experience: "5 years of experience",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: "https://i.scdn.co/image/ab6761610000e5eb5b627785fde57cf7426220de",
  },
  {
    name: "Linah Imbari",
    experience: "5 years of experience",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/hbz-jennifer-lawrence-hair-index-1557773479.jpg?crop=0.501xw:1.00xh;0.500xw,0&resize=640:*",
  },

  {
    name: "Derick Nyasio",
    experience: "5 years of experience",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: "https://www.kaufmannstatic.com/sc_images/Images/Kaufmann/The-Journal/2019/September/007/KAUFMANN_1680x1860_007_thejournal_01.jpg?w=840",
  },

  {
    name: "Stephen Nyabuto",
    experience: "5 years of experience",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: "https://pyxis.nymag.com/v1/imgs/eb2/ed0/642e863866827069c7d804ed570c3ee6a1-20-tyga.rsquare.w700.jpg",
  },

  {
    name: "Diana Wanjiru",
    experience: "5 years of experience",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: "https://images.mubicdn.net/images/cast_member/436230/cache-412094-1549967917/image-w856.jpg?size=800x",
  },
  {
    name: "Richard Ouma",
    experience: "5 years of experience",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: "https://wallpapercave.com/wp/xeM6qcg.jpg",
  }
];

const OurMembers = () => {
  return (
    <>
      {OUR__MEMBERS.map((item, index) => (
        <Col lg="3" md="3" sm="4" xs="6" key={index} className="mb-4">
          <div className="single__member">
            <div className="single__member-img">
              <img src={item.imgUrl} style={{width:"1%"}} alt="imgs" className="w-100" />

              <div className="single__member-social">
                <Link to={item.fbUrl}>
                  <i class="ri-facebook-line"></i>
                </Link>
                <Link to={item.twitUrl}>
                  <i class="ri-twitter-line"></i>
                </Link>

                <Link to={item.linkedinUrl}>
                  <i class="ri-linkedin-line"></i>
                </Link>

                <Link to={item.instUrl}>
                  <i class="ri-instagram-line"></i>
                </Link>
              </div>
            </div>

            <h6 className="text-center mb-0 mt-3">{item.name}</h6>
            <p className="section__description text-center">
              {item.experience}
            </p>
          </div>
        </Col>
      ))}
    </>
  );
};

export default OurMembers;
