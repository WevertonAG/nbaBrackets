//import Card from '../card';
import Card from '../card';
import UploadForm from '../forms';

//import Tables from '../table';
import * as S  from './styles'

const Main = ()=>{

  return (
    <S.container>
       <S.content>
        {/*<Tables/>
         <UploadForm/>
        */}<Card/>
       </S.content>
    </S.container>
  )

}
export default Main;
