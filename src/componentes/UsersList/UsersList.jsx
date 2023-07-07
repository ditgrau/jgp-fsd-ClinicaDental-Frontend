import { IconNav } from '../../componentes/IconNav/IconNav'
import detailIcon from '../../assets/search.svg'
import { Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { saveId } from "../../Redux/detailUserSlice"
import { useNavigate } from "react-router-dom";
import './UsersList.css'

export function UsersList({ title, array, letra }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const clickHandler = (userId) => {
        dispatch(saveId({ id: userId }))
        navigate('/detail');
    }

    return (
        <Row className="main-row">
            <span className="title-main">{title}</span>
            {array.length > 0
                ?
                (
                    array.map((elem, index) => (
                        <Col key={elem.id} xs={10} md={6} className="main-card users-list">
                            <section className="name-user-list">
                                <div className='letter-user'><div>{letra[index]}</div></div>
                                <span > {elem.name} {elem.surname}</span>
                            </section>
                            <section>
                                <IconNav link='/detail' className='whiteStyle' icon={detailIcon} text='Detalle' clickFunction={() => clickHandler(elem.id)} />
                            </section>
                        </Col>
                    )))
                :
                (<span className="title-main">NO SE ENCUENTRAN {title}</span>)
            }
        </Row>
    )
}