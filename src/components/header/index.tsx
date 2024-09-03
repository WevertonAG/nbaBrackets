import * as S from './styles'
import Nbalogo from './../../assets/nbaLogo.png'

const Header = () => {
  return (
    <S.header>
      <div className="logoBox">
        <img className ='logo'src={Nbalogo} alt="logo" />
      </div>
    </S.header>
  )
}
export default Header;
