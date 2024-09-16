import styled from "styled-components";

const RowOuter = styled.div`
  color: white;
  text-decoration: none;

  &:focus {
    
  }
  
  &:hover{
    text-decoration: none;
    border: 1px solid #FFCE5D;
    background: rgba(209, 164, 59, 0.1);
  },
  &:visited,
  &:link,
  &:active {
    border: 1px solid yellow;
    
  }
  margin-top: 10px;
  border: 1px solid #FFFFFF;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  padding: 18px 24px;
  background-image: url("/images/rowbg.png");
  background-repeat: no-repeat;
  background-position: left;
  background-size: auto 100%;
  margin-bottom: 16px;
  position: relative;
  overflow: hidden;
  &::before {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    background: rgba(196, 196, 196, 0.1);
    background-image: url("../../assets/images/rowbg.png");
    background-repeat: no-repeat;
    background-position: left;
    z-index: -1;
  }
  .right {
    position: relative;
    right: 4rem;
    display: flex;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: baseline;
    align-content: center;
    justify-content: center;
    
    justify-content: space-between;
    width: 42%;
    .namebx {
      h5 {
        font-size: 15px;
        margin-bottom: 3px;
        line-height: 1;
        font-weight: 500;
        margin-left: 0.5rem;
        margin-right: 0.5rem;
      }
      .amt {
        color: #919191;
        font-size: 14px;
      }
      &.namebxlst {
        text-align: left;
      }
    }
    .rightrow {
      width: 20%;
      
    }
    .versus {
      position: relative;
      left: 95px;
      top: 30px;
      margin-bottom: 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 60%;
      font-size: 14px;
      span {
        color: #D1A43B;
        font-size: 2em;
        margin: 0 16px;
        font-weight: 800;
        letter-spacing: -0.2em;
      }
      .times {
        color: rgba(221, 193, 78, 1);
        border: 1px solid rgba(255, 255, 255, 0.5);
        border-radius: 6px;
        font-weight: 800;
        padding: 4px;
        margin: 5px;
        min-width: 60px;
        text-align: center;
        background-color: rgba(255, 206, 93, 0.2);
      }
    }
  }
  
 
  .center {
    display: flex;
    align-items: center;
    border-right: 2px solid rgba(255, 255, 255, 0.1);
    border-left: 2px solid rgba(255, 255, 255, 0.1);
    padding: 0 20px;
    margin: 0 20px;
    span {
      color: rgba(255, 255, 255, 0.4);
    }
    .val {
      margin: 0 6px;
    }
    .grad {
      background: -webkit-linear-gradient(#ac8940, #e2c651, #d7b746);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  .teamImgA { 
    overflow: hidden;
    height: 50px;
    width: 50px;
    position: relative;
    left: 6.5rem;
    top: 0.2rem;
    border: 1px solid #DDC14E;
    max-height: 50px;
    max-width: 50px;
    border-radius: 10px;
    img {
      overflow: visible;
      position: relative;
      width: 100%;
      height: auto;
      flex-grow: 0;
      flex-shrink: 0;
      flex-basis: auto;
      }
  }
  .teamImgB { 
    overflow: hidden;
    margin-bottom: -0.4rem; 
    height: 50px;
    width: 50px;
    max-height: 50px;
    max-width: 50px;
    margin-right: 0rem;
    position: relative;
    left: -9rem;
    border: 1px solid #DDC14E;
    border-radius: 10px;
    img {
      overflow: visible;
      position: relative;
      width: 100%;
      height: auto;
      flex-grow: 0;
      flex-shrink: 0;
      flex-basis: auto;
      }
  }

  .Tname {
    width: 7rem;
    font-size: 1em;
    position: relative;
    left: -2rem;
    color: #DDBC4E;
  }
  .Tname2 {
    width: 7rem;
    font-size: 1em;
    position: relative;
    left: -2rem;
    color: #DDBC4E;
  }


  .left {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 30%;
    
    h5 {
      font-size: 16px;
      margin-bottom: 4px;
      line-height: 1;
    }
    .time {
      color: #919191;
      font-size: 14px;
    }
    svg {
      margin-right: 10px;
      path {
        fill: rgba(255, 255, 255, 0.4);
      }
    }
  }


  img { 
    border-radius: 10px;
  
  }


  .startDate { 
    font-size: 0.7rem;
    width: 10rem;
  }
  

  &.green {
    .left {
      svg {
        path {
          fill: rgba(89, 219, 141, 0.7);
        }
      }
    }
    .right {
      .amt {
        color: #59db8d;
      }
      .times {
        &.green {
          color: #FFCE5D;
          border: 1px solid #FFCE5D;
        }
      }
    }
  }

  &.active {
    &::before {
      background-image: url("../../assets/Icons/Cameradont.svg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50%; 50%;
      background: linear-gradient(
          90deg,
          #bb9d3a 0%,
          #b5963a 1.81%,
          #a78539 2.89%,
          #9d7a38 4.23%,
          #987338 6.12%,
          #967138 11.37%,
          #9b763a 18.26%,
          #a9863f 26.92%,
          #c0a047 36.52%,
          #e0c352 46.73%,
          #edd156 50.25%,
          #967930 67%,
          #9a7d31 74.05%,
          #a68936 81.2%,
          #bb9c3d 88.4%,
          #d7b746 95.59%,
          #dcbc48 96.73%
        ),
        #c4c4c4;
      opacity: 0.2;
    }

    .left {
      .time {
        color: rgba(255, 234, 140, 0.7);
      }
    }
    .center {
      span {
        color: rgba(255, 234, 140, 0.7);
      }
    }
  }

  .info{
    background-image: url("../../assets/Icons/Info_icon.svg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50%; 50%;
    font-size: 14px !important;
    margin-left: 20px !important;
  }
  @media screen and (max-width: 1680px) {
 
    .teamImgA {
      top: 0.3rem;
      left: 5.7rem;
    }
    .teamImgB {
      left: -8.3rem;
    }
  
    .left{
    width: 24%;
    }
    .right {
    width: 46%;
    .versus{
      left: 88px;
    } 
    }
  }

  @media screen and (max-width: 1600px) {
    .right {
      position: relative;
      left: -1.5rem;
      versus {
        
        }
      }
    }

    .teamImgA {
      left: 5.3rem;

    }
    .teamImgB {
      left: -8.1rem;
    }

    .BetsTotal {
      position: relative;
      bottom: 1rem;      
      white-space: nowrap;
    }
    .times {
      margin-left: 2px !important;
      margin-right: 2px !important;
    }
  }


  @media screen and (max-width: 1440px) {
    .teamImgA {
      left: 4.3rem;
    }

    .teamImgB {
      left: -5.8rem;
    }
    .BetsTotal {
      position: relative;
      bottom: 1rem;      
      white-space: nowrap;
    }

  }



@media screen and (max-width: 1300px) {
    flex-flow: wrap;
    .right {
      width: 100%;
      margin-top: 20px;
      white-space: nowrap;
      .versus {
        width: 65%;
        left: 150px;
        span {
          position: relative;
          left: 1.7rem;
        }
        .times {
          margin-left: 2rem !important;
          margin-right: 2rem !important;
        }
      }

    
    }

    .startDateTitle {
      top: 0.5rem;
    }
    .teamImgB {
      left: -13.5rem;
      bottom: 0.4rem;
    }
    .teamImgA {
      position: relative;
      top: -0.2rem;
      left: 16rem;
      margin-right: 0rem;
      margin-left: 0rem;
      margin-bottom: 0rem;
    }

    .center {
      margin-right: 0;
      border-right: 0;
      padding-right: 0;
    }
    .BetsTotal {
      position: relative;
      top: -2rem;
      left: 3rem;
      bottom: 0.5rem;      
      white-space: nowrap;
      
    }
    .right {
      left: 0rem;
    }
    .Tname {
      left: 0rem;
    }
  }

  @media screen and (max-width: 1024px) {
    .teamImgB {
      left: -8.2rem;
      max-width: 80px;
      max-height: 80px;
      width: 80px;
      height: 80px;
    }
    .teamImgA {
      left: 5.8rem;
      max-width: 80px;
      max-height: 80px;
      width: 80px;
      height: 80px;
    }
    .right {
      white-space: normal;
      .Tname {
        bottom: 0.5rem;
        top: 3rem;
        font-size: 1.3rem !important;
        left: -0.5rem;
      }
      .Tname2 {
        left: -5rem;
        top: 3rem;
        font-size: 1.3em !important;     
      }
      .versus {
        margin-bottom: 4rem;
        position: relative;
        top: 4.5rem;
        left: -3rem;
        width: 45%;
        .times{
          margin-left: 3rem !important;
          margin-right: 3rem !important;
        }
        span{
          font-size: 3rem;
          position: relative;
          left: 2rem;
          bottom: 2rem;
        }
     

      }
      
    }
    
  }

  @media screen and (max-width: 800px) {
    .right{
      width: 100%;

      .versus{
        width: 39%;
        left: -1rem;
        span{
          left: 0.1rem;
        }
        .times{
          margin-left: 1rem !important;
          margin-right: 1rem !important;
        }
      }

    }
    
    .teamImgB {
      left: -8.5rem; 
    }

    .teamImgA {
      left: 3.7rem;
    }
    .Tname2{
      left: -7rem !important; 
    }
    
  }

  }

  @media screen and (max-width: 768px) {
    .startDateDad {
      position: relative;
      left: 4rem;
      .startDateTitle {
        top: 1.2rem;
      }
    }
    .right {
      left: -0.5rem;
      width: 92%;
      .Tname2 {
        left: -4rem !important;
        font-size: 1.2rem !important;
      }
      .Tname {
        left: 0rem;
        font-size: 1.2rem !important;
      }
      .teamImgB {
        left: -4.5rem;
        font-size: 1.2rem !important;
      }
      .versus {
        position: relative;
        left: 1.5rem;
        width: 44%;
      }
    }
    
 
  }

  @media screen and (max-width: 620px) {
    flex-flow: wrap;
    .left {
      width: 100%;
      font-size: 0.8rem;
    }
    .right {
      width: 90%;
      margin-top: 0px;
      left: -1rem;
      .versus {
        width: 46%;
        left: 0.8rem;
       span {
         left: -0.2rem;
       }
      }
      .teamImgA {
        left: -0.3rem;
      }
      .teamImgB {
        left: -2.5rem;
      }

     .Tname2 {
      left: -2rem !important;
      top: 4rem !important;
      font-size: 1rem !important;
     }

     .Tname {
      left: 0.5rem !important;
      top: 4rem !important;
      font-size: 1rem !important;
     }
    }
    .center {
      width: 100%;
      margin: 20px 0;
      border-right: 0;
      border-left: 0;
      padding: 0;
      width: 100%;
      border-top: 2px solid rgba(255, 255, 255, 0.1);
      border-bottom: 2px solid rgba(255, 255, 255, 0.1);
      padding: 10px 0;
    }
    
    

    .BetsTotal {
      position: relative;
      top: -1.5rem;
      left: -10rem;
      bottom: 0.5rem;      
      white-space: nowrap;
      
    }
    .times {
      min-width: 45px !important;
    }
  }


  @media screen and (max-width: 550px) {
    flex-flow: wrap;
    .left {
      width: 100%;
      font-size: 0.8rem;
    }
    .right {
      width: 90%;
      margin-top: 0px;
      margin-bottom: 20px;
      left: -1rem;
      .versus {
        width: 44%;
        left: 0rem;
       span {
         left: 0.3rem;
         font-size: 2rem;
       }
      }
      .teamImgA {
        left: 7rem;
        width: 70px;
        height: 70px;
      }
      .teamImgB {
        left: -1.5rem;
        width: 70px;
        height: 70px;
      }

     .Tname2 {
      left: -2rem !important;
      top: 4rem !important;
      font-size: 1rem !important;
      display: none;
     }

     .Tname {
      left: 0.5rem !important;
      top: 4rem !important;
      font-size: 1rem !important;
      display: none;
     }
    }
    .center {
      width: 100%;
      margin: 20px 0;
      border-right: 0;
      border-left: 0;
      padding: 0;
      width: 100%;
      border-top: 2px solid rgba(255, 255, 255, 0.1);
      border-bottom: 2px solid rgba(255, 255, 255, 0.1);
      padding: 10px 0;
    }
    
    

    .BetsTotal {
      position: relative;
      top: -1.5rem;
      left: -10rem;
      bottom: 0.5rem;      
      white-space: nowrap;
      
    }
    .times {
      min-width: 45px !important;
    }
  }

  @media screen and (max-width: 480px) {
    flex-flow: wrap;
    .left {
      width: 100%;
      font-size: 0.8rem;
    }
    .right {
      width: 90%;
      margin-top: 0px;
      margin-bottom: 20px;
      left: -1rem;
      .versus {
        width: 44%;
        left: -1rem;
       span {
         left: 0.3rem;
         font-size: 2rem;
       }
      }
      .teamImgA {
        left: 5rem;
        width: 60px;
        height: 60px;
      }
      .teamImgB {
        left: 0rem;
        width: 60px;
        height: 60px;
      }

     .Tname2 {
      left: -1.5rem !important;
      top: 4rem !important;
      font-size: 0.8rem !important;
     }

     .Tname {
      left: 0.5rem !important;
      top: 4rem !important;
      font-size: 0.8rem !important;
     }
    }
    .center {
      width: 100%;
      margin: 20px 0;
      border-right: 0;
      border-left: 0;
      padding: 0;
      width: 100%;
      border-top: 2px solid rgba(255, 255, 255, 0.1);
      border-bottom: 2px solid rgba(255, 255, 255, 0.1);
      padding: 10px 0;
    }
    
    

    .BetsTotal {
      position: relative;
      top: -1.5rem;
      left: -10rem;
      bottom: 0.5rem;      
      white-space: nowrap;
      
    }
    .times {
      min-width: 45px !important;
    }
  }

  @media screen and (max-width: 320px) {
    flex-flow: wrap;
    .left {
      width: 100%;
      font-size: 0.8rem;
    }
    .right {
      width: 90%;
      margin-top: 0px;
      margin-bottom: 20px;
      left: -1rem;
      .versus {
        width: 44%;
        left: -3.3rem;
       span {
         left: 0.5rem;
         font-size: 2rem;
       }
      }
      .teamImgA {
        left: 1rem;
        width: 60px;
        height: 60px;
      }
      .teamImgB {
        left: 1.5rem;
        width: 60px;
        height: 60px;
      }

     .Tname2 {
      left: -1.5rem !important;
      top: 4rem !important;
      font-size: 0.8rem !important;
     }

     .Tname {
      left: 0.5rem !important;
      top: 4rem !important;
      font-size: 0.8rem !important;
     }
    }
    .center {
      width: 100%;
      margin: 20px 0;
      border-right: 0;
      border-left: 0;
      padding: 0;
      width: 100%;
      border-top: 2px solid rgba(255, 255, 255, 0.1);
      border-bottom: 2px solid rgba(255, 255, 255, 0.1);
      padding: 10px 0;
    }
    
    

    .BetsTotal {
      position: relative;
      top: -1.5rem;
      left: -10rem;
      bottom: 0.5rem;      
      white-space: nowrap;
      
    }
    .times {
      min-width: 45px !important;
    }
  }
   
  



`;

export default RowOuter;
