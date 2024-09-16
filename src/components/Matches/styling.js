import styled from "styled-components";

const MatchesDiv = styled.div`
    header {
      margin-bottom: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .left {
        display: flex;
        border-bottom: 1px solid #191919;
        li {
          margin-right: 40px;
          list-style-type: none;
          padding: 0 6px 16px;
          cursor: pointer;
          opacity: 0.5;
          position: relative;
          display: flex;
          justify-content: center;
          :last-child {
            margin-right: 0;
          }
          img {
            height: 22px;
            width: auto;
          }
          &:before {
            content: "";
            position: absolute;
            height: 3px;
            width: 0;
            bottom: 0;
            background: transparent;
            transition: width 0.3s ease, background-color 0.2s ease;
            transform: translateY(50%);
          }
          &:hover:before {
            width: 100%;
            background: linear-gradient(
              90deg,
              #bb9d3a 1.48%,
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
            );
          }
          &.active {
            &:before {
              width: 100%;
              background: linear-gradient(
                90deg,
                #bb9d3a 1.48%,
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
              );
            }
            opacity: 1;
          }
        }
      }
  
      .right {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: -14px;
        .switch input {
          position: absolute;
          opacity: 0;
        }
        label {
          margin: 0;
          margin-right: 10px;
        }
  
        .switch {
          display: inline-block;
          font-size: 20px; /* 1 */
          height: 14px;
          width: 2em;
          background: rgba(196, 196, 196, 0.2);
          border-radius: 1em;
          cursor: pointer;
        }
  
        .switch div {
          height: 1em;
          width: 1em;
          border-radius: 1em;
          background: linear-gradient(
            133.62deg,
            #bb9d3a 2.22%,
            #b5963a 3.92%,
            #a78539 4.94%,
            #9d7a38 6.21%,
            #987338 8%,
            #967138 12.95%,
            #9b763a 19.45%,
            #a9863f 27.62%,
            #c0a047 36.68%,
            #e0c352 46.32%,
            #edd156 49.64%,
            #967930 65.45%,
            #9a7d31 72.1%,
            #a68936 78.85%,
            #bb9c3d 85.64%,
            #d7b746 92.43%,
            #dcbc48 93.5%
          );
          border: 1px solid #ebcf56;
          box-shadow: 0 0.1em 0.3em rgba(0, 0, 0, 0.3);
          transition: all 300ms;
          transform: translateY(-3px);
        }
  
        .switch input:checked + div {
          transform: translate3d(100%, 0, 0) translateY(-3px);
        }
  
        .toggle {
          display: flex;
          align-items: center;
          span {
            font-size: 15px;
            font-weight: 400;
          }
        }
  
        .info {
          background: linear-gradient(
            133.62deg,
            #bb9d3a 2.22%,
            #b5963a 3.92%,
            #a78539 4.94%,
            #9d7a38 6.21%,
            #987338 8%,
            #967138 12.95%,
            #9b763a 19.45%,
            #a9863f 27.62%,
            #c0a047 36.68%,
            #e0c352 46.32%,
            #edd156 49.64%,
            #967930 65.45%,
            #9a7d31 72.1%,
            #a68936 78.85%,
            #bb9c3d 85.64%,
            #d7b746 92.43%,
            #dcbc48 93.5%
          );
          border: 1px solid #ebcf56;
          width: 38px;
          height: 38px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-left: 40px;
          border-radius: 6px;
          cursor: pointer;
          svg {
            transform: scale(0.8);
          }
        }
      }
    }
  
    @media screen and (max-width: 1400px) {
      header {
        flex-direction: column;
        .left {
          flex-flow: wrap;
          justify-content: center;
          li {
            margin-bottom: 24px;
          }
        }
        .right {
          margin-top: 30px;
          margin-bottom: 20px;
        }
      }
    }

    input{
      margin-right: 5px;
    display: none;
     }



     
    .filters {
      display: flex;
      span {
        margin-right: 20px;
      }

      label {
        margin: 0;
        margin-right: 10px;
        position; absolute;
        z-index: 500;
      }
      
      .switch {
        display: inline-block;
        font-size: 20px; /* 1 */
        height: 14px;
        width: 2em;
        background: rgba(196, 196, 196, 0.2);
        border-radius: 1em;
        cursor: pointer;
        margin-right: 20px !important;
        position: relative;
        z-index: 500;
      }
     
      .switch div {
        height: 1em;
        width: 1em;
        border-radius: 1em;
        background: linear-gradient(
          133.62deg,
          #bb9d3a 2.22%,
          #b5963a 3.92%,
          #a78539 4.94%,
          #9d7a38 6.21%,
          #987338 8%,
          #967138 12.95%,
          #9b763a 19.45%,
          #a9863f 27.62%,
          #c0a047 36.68%,
          #e0c352 46.32%,
          #edd156 49.64%,
          #967930 65.45%,
          #9a7d31 72.1%,
          #a68936 78.85%,
          #bb9c3d 85.64%,
          #d7b746 92.43%,
          #dcbc48 93.5%
        );
        border: 1px solid #ebcf56;
        box-shadow: 0 0.1em 0.3em rgba(0, 0, 0, 0.3);
        transition: all 300ms;
        transform: translateY(-3px);
      }

      .switch input:checked + div {
        transform: translate3d(100%, 0, 0) translateY(-3px);
      }

      .toggle {
        display: flex;
        align-items: center;
        span {
          font-size: 15px;
          font-weight: 400;
          margin-right: 20px;
        }
      }

      .roro {
        color: black;
        font-weight: 800;
        font-size: 1.5rem;
        background: linear-gradient(
          133.62deg,
          #bb9d3a 2.22%,
          #b5963a 3.92%,
          #a78539 4.94%,
          #9d7a38 6.21%,
          #987338 8%,
          #967138 12.95%,
          #9b763a 19.45%,
          #a9863f 27.62%,
          #c0a047 36.68%,
          #e0c352 46.32%,
          #edd156 49.64%,
          #967930 65.45%,
          #9a7d31 72.1%,
          #a68936 78.85%,
          #bb9c3d 85.64%,
          #d7b746 92.43%,
          #dcbc48 93.5%
        );
        border: 1px solid #ebcf56;
        width: 28px;
        height: 28px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 40px;
        border-radius: 6px;
        cursor: pointer;
        :hover {
          .tooltipContent {
            display: inline-block;
            transition-property: transform;
            transition-duration: 400ms;
            transition-timing-function: ease;
            transform: scale(1);
          }
        }
        svg {
          transform: scale(0.8);
        }
      }
    }
    .tooltipContent {
      position: absolute;
      z-index: 400;
      display: none;
      background-color: rgba(83, 83, 83, 1);
      border-radius: 6px;
      font-size: 12px !important;
      font-weight: 200;
      color: white;
      padding: 10px;
      width: 200px !important;
      bottom: 3rem;
      
      transform: scale(0);
      
    }

    }

    .roro {
  
      z-index: 100;
      width: 30px;
      height: 30px;
      
      background-repeat: no-repeat;

      .roro::before,
    .roro::after {
      --scale: 0;
      --arrow-size: 10px;
      --tooltip-color: #6A3B0D;
    
      position: absolute;
      top: -.25rem;
      left: 50%;
      transform: translateX(-50%) translateY(var(--translate-y, 0)) scale(var(--scale));
      transition: 150ms transform;
      transform-origin: bottom center;
     
    }
    
    .roro::before {
      --translate-y: calc(-100% - var(--arrow-size));
    
      content: attr(data-tooltip);
      color: white;
      padding: .5rem;
      border-radius: .3rem;
      text-align: center;
      width: max-content;
      max-width: 100%;
     
      
      background: var(--tooltip-color);
    }
    
    .roro:hover::before,
    .roro:hover::after {
      --scale: 1;
    }
    
    .roro::after {
      --translate-y: calc(-1 * var(--arrow-size));
    
      content: '';
      border: var(--arrow-size) solid transparent;
      border-top-color: var(--tooltip-color);
      transform-origin: top center;
    } 
    `;

export default MatchesDiv;