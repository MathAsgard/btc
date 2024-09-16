import styled from "styled-components";

const BettingStyle = styled.div `
  background: rgba(196, 196, 196, 0.1);
  border-radius: 8px;
  margin-bottom: 40px;
  display: flex;

  .right {
    width: 35%;
    /* display:flex;
     justify-content:space-between; */
    padding: 40px 70px;
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      h6 {
        color: rgba(237, 237, 237, 0.2);
        margin: 0;
      }
      h5 {
        font-size: 17px;
        margin: 0;
      }
    }

    .inputNoArrows[type="number"]::-webkit-inner-spin-button,
    .inputNoArrows[type="number"]::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    .ipouter {
      position: relative;
      margin-top: 30px;
      input {
        background: rgba(0, 0, 0, 0.5);
        border: 1px solid rgba(255, 255, 255, 0.26);
        border-radius: 8px;
        outline: 0;
        padding: 8px 8px;
        width: 100%;
        color: #fff;
        &:focus {
          border: 1px solid rgba(255, 255, 255, 0.8) !important;
        }
        :hover {
          border: 1px solid rgba(255, 255, 255, 0.35);
        }
      }
      .gradtext {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 12px;
      }
    }

    .iptoptions {
      .row {
        margin: 0 -6px;
        display: flex;
        justify-content: space-between;
        margin: 16px 0;
        button {
          outline: 0;
          border: 1px solid rgba(255, 255, 255, 0.5);
          background: rgba(89, 89, 89, 0.2);
          color: rgba(255, 255, 255, 0.5);
          width: calc(25% - 10px);
          padding: 7px;
          border-radius: 7px;
          &.active {
            background: rgba(255, 206, 93, 0.5);
            border: 1px solid rgba(255, 206, 93, 1);
            color: rgba(255, 206, 93, 1);
            font-weight: 800;
            cursor: pointer;
          }
          :hover {
            border: 1px solid rgba(255, 255, 255, 0.8);
            color: white;
          }
        }
      }
      .maxbtn {
        background: rgba(112, 112, 112, 0.2);
        border: 1px dashed rgba(112, 112, 112, 0.5);
        color: rgba(255, 255, 255, 0.5);
        border-radius: 8px;
        outline: 0;
        padding: 10px 8px;
        width: 100%;
          :hover {
            background: rgba(112, 112, 112, 0.3);
            border: 1px dashed rgba(112, 112, 112, 0.8);  
          }
      }
    }
    .gradbtn {
      color: #000;
      text-align: center;
      font-weight: 600;
      display: flex;
      justify-content: center;
      margin-top: 30px;
      &::before {
        display: none;
      }
    }
  }

  .betTeamImg{
    overflow: hidden;
    width: 160px;
    height: 160px;
    border-radius: 10px;
    border: 1px solid #DDC14E;
    
    display: flex;
    align-items: flex-start;
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
  .left {
    width: 65%;
    display: flex;
    justify-content: space-between;
    padding: 40px 70px;
    border-right: 1px dashed rgba(255, 255, 255, 0.2);

    
    .center {
      width: 30%;
      max-width: 240px;
      margin: 19px 0;
      h6 {
        text-align: center;
        font-weight: 400;
        color: rgba(255, 255, 255, 0.4);
        font-size: 14px;
        margin-bottom: 16px;
      }
      h4 {
        text-align: center;
        font-size: 22px;
      }
      .versus {
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
      
        div {
          color: #edd156;
          
        }
        span {
          color: rgba(255, 255, 255, 0.34);
         
        }
      }
      .rewards {
        display: flex;
        justify-content: space-between;
        margin-top: 24px;
       div {
        color: rgba(221, 193, 78, 1) !important;
        border: 1px solid rgba(255, 255, 255, 0.5);
        border-radius: 6px;
        font-weight: 800;
        padding: 4px;
        margin: 5px;
        min-width: 60px;
        max-height: 33px;
        text-align: center;
        background-color: rgba(255, 206, 93, 0.2);
       }
        .TAReward {
          position: relative;
          right: 19.5rem;
          top: 5rem;
        }
        .TBReward {
          position: relative;
          right: -19.5rem;
          top: 5rem;
        }
       


        span {
          color: #D1A43B;
        font-size: 2em;
        margin: 0 16px;
        font-weight: 800;
        letter-spacing: -0.2em;
        position: relative;
        left: -0.2rem;
        }
      }
    }
    .namebx {
      margin: 19px 0;
      text-align: center;
      /* img{
         <width:14></width:14>0px;
       } */
      h4 {
        font-size: 20px;
        margin-top: 60px;
        
      }
     .drawtop {
       position: relative;
       top: -2rem;
     }
     .drawbutton {
      position: relative;
      top: -2rem;
     }
     
      .gradientbtn {
        outline: 0;
        color: #fff;
        border: 0;
        margin: auto;
        margin-top: 24px;
        &.active {
          color: #000;
          font-weight: 600;
          &::before {
            display: none;
          }
        }
      }
      
    }
  }

 @media screen and (max-width: 1680px) {
      .TAReward {
      right: 15.8rem !important;
      }
      .TBReward {
      right: -15.8rem !important;
      }
  }

  @media screen and (max-width: 1600px) {
    .TAReward {
    right: 14.5rem !important;
    }
    .TBReward {
    right: -14.5rem !important;
    }
}

@media screen and (max-width: 1440px) {
  .TAReward {
  right: 11.5rem !important;
  }
  .TBReward {
  right: -11.5rem !important;
  }
}

@media screen and (max-width: 1300px) {
  .TAReward {
  right: 9rem !important;
  }
  .TBReward {
  right: -9rem !important;
  }
}

@media screen and (max-width: 1024px) {
  .TAReward {
  right: 4.9rem !important;
  }
  .TBReward {
  right: -4.9rem !important;
  }
}

@media screen and (max-width: 997px) {
  .TAReward {
    top: 3.5rem !important;
    right: 4rem !important;
  }
  .TBReward {
    top: 3.5rem !important;
    right: -4rem !important;
  }
}

  @media screen and (max-width: 768px) {
    .left {
      padding: 20px 10% 40px;
      flex-direction: column;
      .betTeamImg {
        left: 1.3rem;
        position: relative !important;
      }
      .TAReward {
        top: 31rem !important;
        right: -4.2rem !important;
        }
        .TBReward {
        top: 52.5rem !important;
        right: 4.2rem !important;
        }
      .center {
        order: 1;
        width: 100%;
        margin: 19px auto;
        .versus {
          margin-top: 20px;
        }
      }
      .namebx {
        order: 2;
        img {
          height: 120px;
        }
      }
    }
    .right {
      padding: 40px 10%;
      width: 100%;
    }
  }
`;

export default BettingStyle;