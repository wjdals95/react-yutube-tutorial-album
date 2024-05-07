import { CardDTO } from '@/pages/index/types/card'
import stlyes from './Card.module.scss'


interface Props{
    prop: CardDTO
}

function Card({prop}: Props) {
   return (
      <div className={stlyes.card}>
         <div className={stlyes.card__imageBox}>
            <img src={prop.urls.small} alt="" className={stlyes.card__imageBox__image} />
           </div>
           <div className={stlyes.card__infoBox}>
               <div className={stlyes.card__infoBox__row}>
                   <span className={stlyes.label}>작성자</span>
                   <span className={stlyes.value}>{prop.user.name}</span>
               </div>
               <div className={stlyes.card__infoBox__row}>
                   <span className={stlyes.label}>이미지 크기</span>
                   <span className={stlyes.value}>{prop.width} X {prop.height}</span>
               </div>
               <div className={stlyes.card__infoBox__row}>
                   <span className={stlyes.label}>업로드 날짜</span>
                   <span className={stlyes.value}>{prop.created_at.split('T')[0]}</span>
               </div>
               <div className={stlyes.card__infoBox__row}>
                   <span className={stlyes.label}>마지막 업데이트</span>
                   <span className={stlyes.value}>{prop.updated_at.split('T')[0]}</span>
               </div>
               <div className={stlyes.card__infoBox__row}>
                   <span className={stlyes.label}>다운로드 수</span>
                   <span className={stlyes.value}>{prop.likes}</span>
               </div>
           </div>
      </div>
   )
}

export default Card
