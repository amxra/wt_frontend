import styled from "styled-components";

export const HistoryStyle = styled.div`
  width: 80vw;
  margin: 0 auto;
  margin-bottom: 5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  padding: 1rem 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media only screen and (max-width: 800px) {
    width: 90vw;
  }

  @media only screen and (max-width: 500px) {
    width: 95vw;
  }

  @media only screen and (max-width: 400px) {
    width: 97vw;
  }

  header {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 6rem;
    width: 100%;

    h2 {
      font-family: Ubuntu;
      font-style: normal;
      font-weight: bold;
      font-size: 1.6rem;
      line-height: 1.5;
      margin-bottom: 0.5rem;
      color: #252422;
    }

    p {
      font-family: Ubuntu;
      font-style: normal;
      font-weight: 500;
      font-size: 1rem;
      line-height: 150.19%;

      letter-spacing: 0.02em;

      color: #ccc5b9;
    }
  }
`;

export const ModalFooter = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: 1rem;
  justify-content: flex-end;

  button {
    margin: 0 0.5rem;
  }
`;

export const ModalContentArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  min-height: 150px;
  border-width: 1px;
  justify-content: center;
  align-items: center;
  border-radius: 0.8rem;
`;

export const WorkoutHistoryCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  cursor: pointer;
  border-top: 1px solid #ccc5b9;
  border-bottom: 1px solid #ccc5b9;

  .history {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-between;
    align-items: center;

    @media only screen and (max-width: 550px) {
      flex-direction: column;
    }

    .link {
      font-family: Roboto;
      font-style: normal;
      font-weight: 300;
      font-size: 0.9rem;
      line-height: 0.9rem;
      text-transform: uppercase;
      color: #252422;
      padding: 0 1rem;

      @media only screen and (max-width: 550px) {
        padding: 1rem 0;
      }
      &:hover {
        font-weight: bolder;
      }
    }

    .history-detail {
      display: flex;
      flex-wrap: wrap;
      width: 70%;
      align-items: center;

      .history-image {
        width: 15%;

        @media only screen and (max-width: 1000px) {
          width: 25%;
        }

        @media only screen and (max-width: 650px) {
          display: none;
        }
        img {
          width: 100%;
          height: 100px;
        }
      }
      .history-content {
        display: flex;
        flex-wrap: wrap;
        margin: 0 1rem;
        flex-direction: column;

        @media only screen and (max-width: 650px) {
          margin: 1rem;
        }
        .workout-name {
          font-family: Roboto;
          font-style: normal;
          font-weight: bolder;
          font-size: 1rem;
          line-height: 14px;
          margin-bottom: 0.5rem;
          color: #252422;
        }
        .flex {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-evenly;

          p {
            color: #403d39;
            font-family: Roboto;
            font-style: normal;
            font-weight: 300;
            font-size: 0.8rem;
            line-height: 12px;
            margin: 0.5rem 0;
          }
        }
      }
    }
  }
`;