import styled from "styled-components";

export const Container = styled.div`
    margin-bottom: 30px;

    p {
        font-size: 13px;
        color: #b8b8b4;
    }

    h1 {
        margin: 0;
        padding: 0;
        font-size: 26px;
    }

    hr {
        height: 1px;
        border: 0;
        background-color: #16195c;
        margin: 30px 0;
    }

    .backButton {
        font-size: 16px;
        text-decoration: none;
        padding: 20px 40px;
        color: #b8b8d4;
    }
`;
export const SelectedOptions = styled.div`
    display: flex;
    border: 2px solid #25cd89;
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 15px;
    align-items: center;
    cursor: pointer;
`;
export const Icon = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: #191a59;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
`;

export const Info = styled.div`
    flex: 1;
    margin-left: 20px;
`;

export const Title = styled.div`
    font-size: 17px;
    font-weight: bold;
    margin-bottom: 7px;
`;

export const Description = styled.div`
    font-size: 14px;
    color: #b8b8d4;
`;
export const Label = styled.div`
    margin-bottom: 30px;
`;
export const TitleLabel = styled.div`
    margin-bottom: 10px;
`;
export const InfoName = styled.div`
    border: 2px solid #25cd89;
    padding: 10px;
    border-radius: 10px;
`;
