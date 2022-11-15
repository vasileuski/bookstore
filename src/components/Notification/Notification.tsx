import { useNavigate } from "react-router-dom";
import { Portal, PortalTarget } from "../Portal/Portal";

interface INotification {
  toggleModal: (value: boolean) => void;
}

export const Notification = ({ toggleModal }: INotification) => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/");
    toggleModal(false);
  };

  return (
    <Portal target={PortalTarget.NOTIFICATION}>
      <div
        className="modal d-flex"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        onClick={() => onClick()}
      >
        <div className="modal-dialog d-flex align-items-center">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">You successfully authenticated</h5>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" onClick={() => onClick()}>
                Okay
              </button>
            </div>
          </div>
        </div>
      </div>
    </Portal>
  );
};
