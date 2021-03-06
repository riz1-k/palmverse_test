import { Modal, Table } from 'react-bootstrap'
import styleClasses from '../../ReservationDetails/ReservationTotals/ReservationTotals.module.scss'
import moment from 'moment';
export default function ReceiptModal(props) {
    return (<Modal show={props.show} onHide={() => {
        props.setShow(false);
        props.setClosed(true);
        window.location.href = "/";
    }}>
        <Modal.Header closeButton>Successful Transaction!</Modal.Header>
        <Modal.Title style={{
            fontSize: "20px",
            marginLeft: "6px",
            padding: "20px 10px"
        }}>Thank you for your reservation at Palmverse !</Modal.Title>
        <div className='code' style={{
            width: "95%"
        }}>

            <Modal.Body className='code2' style={{
                overflowX: "scroll"
            }}>Your transaction ID is :<code> {props.tID}</code> </Modal.Body>
        </div>
        <button style={{
            backgroundColor: "skyblue",
            width: "fit-content",
            margin: "auto",
            padding: "6px",
            borderRadius: "4px",
            marginBottom: "16px"
        }} onClick={() => {
            navigator.clipboard.writeText(props.tID);
            alert('Transaction ID copied to your clipboard');
        }}>Copy Transaction ID</button>

        <Modal.Footer>You can check your recently made transaction on <a href="https://solscan.io" target='_blank'>www.solscan.io</a> </Modal.Footer>
    </Modal>);
}