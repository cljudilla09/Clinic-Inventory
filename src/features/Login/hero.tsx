export default function Hero(props : any){
    return (
        <div className="hero-content">
            <span className={props.classTitle}>
                <p>{props.content}</p>
            </span>
        </div>
)
}