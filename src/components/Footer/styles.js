import styled from "styled-components"


const FooterContainer = styled.footer `
    display: flex;
    background-color: ${props => props.theme.colors.PrimaryColor};
    color: ${props => props.theme.colors.BtColor};
    text-align: center;
    padding-top: 20px;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: stretch;
    height: 170px;
`

const ContainerRedes = styled. section `
   display: flex;
    width: 200px;
    margin-bottom: 20px;
    flex-direction: column;
    justify-content: space-around;
    
`


const ContNavRedes = styled.nav `
    display: flex;
    justify-content: space-between;
    align-items: center;
    

`

const IconFb = styled.img `
    width: 50px;
    cursor: pointer;
    transition: all 0.8s ease;

    &:hover {
        transition: all 0.2s ease;
        transform: scale(1.3);
    }
`

const IconIg = styled.img `
    width: 36px;
    transition: all 0.8s ease;

    &:hover {
        transition: all 0.2s ease;
        transform: scale(1.3);
    }
`
const IconX = styled.img `
    width: 50px;
    transition: all 0.8s ease;

    &:hover {
        transition: all 0.2s ease;
        transform: scale(1.3);
    }
`

const ContainerRelaese = styled.section `
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

const ReleaseLink = styled.a `
    text-decoration: none;
    color:  ${props => props.theme.colors.BtColor};
    cursor: pointer;
    font-weight: 800;

    
`



export {
    FooterContainer,
    ContainerRedes,
    ContNavRedes,
    IconFb,
    IconIg,
    IconX,
    ContainerRelaese,
    ReleaseLink,
}