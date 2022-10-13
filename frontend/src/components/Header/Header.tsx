import { HeaderContainer, Logo } from "./Header.style";

const Header = () => {
    return (
        <HeaderContainer>
            <div>
                <Logo src="/images/myteacher.png" />    
            </div>

            <p> Find the best teacher!</p>
        </HeaderContainer>
    )
}

export default Header;