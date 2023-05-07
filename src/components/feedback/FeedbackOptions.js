import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ updateState }) => {

    return (
        <>
            <button className={css.btn} onClick={() => {updateState("good")}}>Good</button>
            <button className={css.btn} onClick={() => { updateState("neutral") }}>Neutral</button>
            <button className={css.btn} onClick={() => { updateState("bad") }}>Bad</button>
        </>
    )
}