import styled from "@emotion/styled"

const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    align-items: center; // vertical center
    justify-content: center; // horiz center
    font-size: 14px;
    font-weight: 500;
`

const Announcement = () => {
  return (
    <Container>
        Super Deal ! Free Shipping on Orders Over $50
    </Container>
  )
}

export default Announcement