import styled from "styled-components";
import { Link } from "react-router-dom";
import { GrEdit } from 'react-icons/gr';

const Feed = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 30px;
`;

const Container = styled.li`
  width: 100%;

  position: relative;
  padding: 20px;

  background: #171717;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;

  display: flex;
  gap: 18px;
`;

const ContainerImage = styled.div`
    width: 10%;
`;

const ContainerPost = styled.div`
    width: 90%;

    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;

  cursor: pointer;
`;

const Name = styled(Link)`
    font-family: Lato;
    font-size: 19px;
    font-weight: 400;
    line-height: 23px;
    color: #fff;
`;

const Description = styled.div`
    font-family: Lato;
    font-size: 17px;
    font-weight: 400;
    line-height: 20px;

    color: #B7B7B7;
`;

const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    color: #fff;

    font-family: Lato;
    font-size: 17px;
    font-weight: 400;
    line-height: 20px;

    margin-top: 30px;
`;

const MetaLink = styled.div`
    width: 100%;
    min-height: 155px;

    border: 1px solid #4d4d44;
    border-radius: 11px;

    overflow: hidden;
    position: relative;
    
    .infoPost {
        width: 65%;
        height: 100%;
        font-family: Lato;
        color: #CECECE;

        padding: 25px;

        display: flex;
        flex-direction: column;
        gap: 10px;

        .title {
            font-size: 16px;
            font-weight: 400;
            line-height: 19px;
        }

        .description {
            font-size: 11px;
            font-weight: 400;
            line-height: 13px;
            color: #9B9595;
        }
    }
`;

const ExternalLink = styled.a`
    all: unset;
    font-size: 11px;
    font-weight: 400;
    line-height: 13px;
    cursor: pointer;
`;

const ImagePost = styled.div`
    width: 155px;
    height: 100%;

    background: url(${props => props.backgroundImage}) no-repeat;
    background-size: 155px 100%;

    position: absolute;
    right: 0;
    top: 0;
`;

const ContainerAction = styled.div`
    position: absolute;
    right: 50px;
    top: 20px;
`;

const GrEditCustom = styled(GrEdit)`
    > * {
        fill: transparent;
        stroke: #FFFFFF;
        cursor: pointer;
    }
`;

export {
    Feed,
    Container,
    ContainerPost,
    ContainerImage,
    Image,
    Name,
    Description,
    ExternalLink,
    Content,
    MetaLink,
    ImagePost,
    ContainerAction,
    GrEditCustom
}