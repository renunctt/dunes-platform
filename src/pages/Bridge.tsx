import BridgeTop from "@/components/Bridge/BridgeTop/BridgeTop";
import css from "./Bridge.module.css";
import BridgeForm from "@/components/Bridge/BridgeForm/BridgeForm";

const Bridge = () => {
  return (
    <section className={css.bridge}>
      <div className={css.bridgeWrap}>
        <div className={css.container}>
          <BridgeTop />
        </div>
        <div className={css.form}>
          <div className={css.container}>
            <div className={css.formContainer}>
              <BridgeForm />
            </div>
          </div>
        </div>
        <div className={css.container}>
          <div className={css.bottom}>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Bridge;

