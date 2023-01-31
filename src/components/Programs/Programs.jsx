import './Programs.css'
import {programsData} from '../../data/programsData'
import RightArrow from '../../assets/rightArrow.png'

const Programs = () => {
  return (
    <div className="programs" id="programs">

        <div className="programs-header">
            <span className="stroke-text">Explore nossos</span>
            <span>Programas de Treinamento</span>
            <span className="stroke-text">para seus objetivos</span>
        </div>

        <div className="program-categories">
            {programsData.map((program) => (
                <div className="category">
                    {program.image}
                    <span>{program.heading}</span>
                    <span>{program.details}</span>

                    <div className="join-now">
                        <span>Cadastrar Agora</span>
                        <img src={RightArrow} alt="arrow" />
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
}

export default Programs;
