import styles from "./SwapCalc.module.css";
import { cryptos } from "../../configs/cryptos-config";
import { useState } from "react";
import swapIcon from "../../assets/images/cryptos/swap-icon.svg";
import arrow from "../../assets/images/icons/arrow-bottom-green.svg";

const getCryptos = [...cryptos];

export const SwapCalc = () => {
    const [selectedCrypto, setSelectedCrypto] = useState(cryptos[0]);
    const [selectedGetCrypto, setSelectedGetCrypto] = useState(getCryptos[2]);
    const [isSelectedCrypto, setIsSelectedCrypto] = useState("");
    const [value, setValue] = useState("1");
    const [value2, setValue2] = useState("");

    const handleChange = (event) => {
        const inputValue = event.target.value;
        const cleanedValue = inputValue.replace(/[^\d.]/g, "");
        setValue(cleanedValue);
        calc();
    };

    const handleChangeGet = (event) => {
        const inputValue = event.target.value;
        const cleanedValue = inputValue.replace(/[^\d.]/g, "");
        setValue2(cleanedValue);
        calc2();
    };

    const handleCryptoChange = (crypto) => {
        setSelectedCrypto(crypto);
        calc();
        setIsSelectedCrypto("");
    };

    const handleGetCryptoChange = (crypto) => {
        setSelectedGetCrypto(crypto);
        calc2();
        setIsSelectedCrypto("");
    };

    const calc = () => {
        const n = parseFloat(
            (
                (Number(value) * Number(selectedCrypto.defaultPrice)) /
                Number(selectedGetCrypto.defaultPrice)
            ).toFixed(7)
        );
        setValue2(String(n));
    };

    const calc2 = () => {
        const n = parseFloat(
            (
                (Number(value2) * Number(selectedGetCrypto.defaultPrice)) /
                Number(selectedCrypto.defaultPrice)
            ).toFixed(7)
        );
        setValue(String(n));
    };

    return (
        <aside className={styles.calc}>
            <div className={styles.top}>
                <div className={styles.topLeft}>Crypto Exchange</div>
                <div className={styles.topRight}>Buy/Sell Crypto</div>
            </div>

            <div className={styles.mid}>
                <div className={styles.info}>You send</div>
                <div className={styles.send}>
                    <div className={styles.sendWallet}>
                        {selectedCrypto && (
                            <button
                                onClick={() =>
                                    isSelectedCrypto === "send"
                                        ? setIsSelectedCrypto("")
                                        : setIsSelectedCrypto("send")
                                }
                                className={styles.sendSelect}
                            >
                                <img
                                    className={styles.cryptoIcon}
                                    src={selectedCrypto.icon}
                                    alt={selectedCrypto.abbr}
                                />
                                <div className={styles.sendSelect}>
                                    {selectedCrypto.abbr}
                                </div>
                                <img
                                    src={arrow}
                                    alt=""
                                    style={{
                                        transition: "all .2s linear",
                                        transform:
                                            isSelectedCrypto === "send"
                                                ? "rotate(180deg)"
                                                : "",
                                    }}
                                />
                            </button>
                        )}
                        {isSelectedCrypto === "send" && (
                            <div className={styles.optionsWrapper}>
                                {cryptos.map((crypto) => {
                                    console.log(selectedCrypto);
                                    return (
                                        <div
                                            key={crypto.abbr}
                                            className={styles.optionItem}
                                            onClick={() =>
                                                handleCryptoChange(crypto)
                                            }
                                        >
                                            {crypto.abbr}
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </div>

                    <div className={styles.inputWrap}>
                        <input
                            className={styles.input}
                            value={value}
                            onChange={handleChange}
                            type="text"
                            name=""
                            id=""
                        />
                    </div>
                </div>

                <div className={styles.swapBtnWrap}>
                    <button className={styles.swapBtn}>
                        <img src={swapIcon} alt="" />
                    </button>
                </div>

                <div className={styles.info}>You get</div>
                <div className={styles.send}>
                    <div className={styles.sendWallet}>
                        {selectedGetCrypto && (
                            <button
                                onClick={() =>
                                    isSelectedCrypto === "get"
                                        ? setIsSelectedCrypto("")
                                        : setIsSelectedCrypto("get")
                                }
                                className={styles.sendSelect}
                            >
                                <img
                                    className={styles.cryptoIcon}
                                    src={selectedGetCrypto.icon}
                                    alt={selectedGetCrypto.abbr}
                                />
                                <div className={styles.sendSelect}>
                                    {selectedGetCrypto.abbr}
                                </div>
                                <img
                                    src={arrow}
                                    alt=""
                                    style={{
                                        transition: "all .2s linear",
                                        transform:
                                            isSelectedCrypto === "get"
                                                ? "rotate(180deg)"
                                                : "",
                                    }}
                                />
                            </button>
                        )}
                        {isSelectedCrypto === "get" && (
                            <div className={styles.optionsWrapper}>
                                {cryptos.map((crypto) => {
                                    return (
                                        <div
                                            key={crypto.abbr}
                                            className={styles.optionItem}
                                            onClick={() =>
                                                handleGetCryptoChange(crypto)
                                            }
                                        >
                                            {crypto.abbr}
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                    <div className={styles.inputWrap}>
                        <input
                            className={styles.input}
                            value={value2}
                            onChange={handleChangeGet}
                            type="text"
                            name=""
                            id=""
                        />
                    </div>
                </div>
            </div>

            <button className={styles.exchange}>EXCHANGE</button>
        </aside>
    );
};
