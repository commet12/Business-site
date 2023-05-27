import { stats } from "../constants";
import styles from "../style";


const Stats = () => (
  <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6 `}>
    {stats.map((stat) => (
      <div key={stat.id} className="{`flex-1 flex flex-row items-center m-3 justify-start">
        <h4 className="font-poppins font-semibold xs:text-[42px] text-[30px] leading-[43px] xs:leading-[52px] text-white">{stat.value}</h4>
        <p className="font-poppins font-normal xs:text-[18px] text-[16px] leading-[25px] xs:leading-[22px] text-gradient uppercase ml-3">{stat.title}</p>
      </div>
    ))}
  </section>
)

export default Stats