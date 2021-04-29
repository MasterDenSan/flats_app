import React from "react";
import './Flat.scss';


const Flat = React.memo((props) => {

    const atr = props.flat.attributes
    const relAtr = props.flat.relationships.attributes

    return (
        <div className="flat">
            <div className="flat__title">
                {atr.title ?? "Без названия"}
            </div>
            <div className="flat__img">
                <img src="./images/flat.jpg" alt=""/>
            </div>
            <div className="flat__area">
                <div className="flat__address">
                    <div className="flat__area">
                        {atr.rooms + " комнаты"} {"площадь" + atr.area} {atr.unit}
                    </div>
                    {"Адрес: " + atr.address.city} {atr.address.street} {atr.address.house} {"кв. " + atr.address.room}
                </div>
            </div>
            <div className="flat__relationships">
                <div className="relationships__contact-name">
                    {"Контактное лицо: " + (props.flat.relationships.type == "agent") && "Агент:"} {relAtr.last_name} {relAtr.first_name} {relAtr.middle_name}
                </div>
            </div>
            <div className="flat__like" onClick={() => props.likeToggleCall(props.flat.id)}>
                {
                    props.flat.like
                        ? <img src="./images/like.svg" alt=""/>
                        : <img src="./images/dislike.svg" alt=""/>
                }
            </div>
        </div>
    )
})

export default Flat;
