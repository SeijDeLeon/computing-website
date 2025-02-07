import AlexHeadshot from '/images/AlexHeadshot.jpeg';
import Diagram from '/images/TeamDiagram.png';

const filesIcon = <svg xmlns="http://www.w3.org/2000/svg"  fill="#000000" viewBox="0 0 256 256"><path d="M213.66,66.34l-40-40A8,8,0,0,0,168,24H88A16,16,0,0,0,72,40V56H56A16,16,0,0,0,40,72V216a16,16,0,0,0,16,16H168a16,16,0,0,0,16-16V200h16a16,16,0,0,0,16-16V72A8,8,0,0,0,213.66,66.34ZM168,216H56V72h76.69L168,107.31v84.53c0,.06,0,.11,0,.16s0,.1,0,.16V216Zm32-32H184V104a8,8,0,0,0-2.34-5.66l-40-40A8,8,0,0,0,136,56H88V40h76.69L200,75.31Zm-56-32a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h48A8,8,0,0,1,144,152Zm0,32a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h48A8,8,0,0,1,144,184Z"></path></svg>;

export default function About() {
    return (
        <section className="w-full bg-slate-100 py-4 px-4">
            <div className="max-w-screen-2xl m-auto flex flex-col md:flex-row ">
                <div className="w-full md:w-3/5  md:mx-16">
                    <h2 className="text-white bg-cyan-700 pl-2"> 
                        Our Mission 
                    </h2>
                    <p className="py-4 lg:py-6 px-2">
                        Lorem ipsum dolor sit amet consectetur. Viverra odio condimentum faucibus ut purus lectus. Sit adipiscing non nam congue dui libero aenean. Aliquet aenean sit tellus lorem lorem purus malesuada amet non. Ultricies scelerisque dignissim pharetra viverra lectus lacus odio mattis. Urna accumsan eget tellus pellentesque massa porttitor. At morbi pulvinar neque augue. Aliquet nibh facilisis ut vestibulum porta eu arcu tincidunt. Sagittis amet diam sit congue vulputate.  Malesuada mauris quis varius facilisis cras diam et montes tortor. Justo velit consequat placerat amet dignissim ornare nibh vitae dictum. Sagittis donec molestie purus massa lectus eget elit accumsan. Eget felis duis at leo. Lectus eu orci faucibus aenean sed faucibus erat. Morbi nec in scelerisque sit tristique. Tortor odio odio sagittis risus non. Adipiscing et odio ipsum quam sit sapien sapien id. Turpis ullamcorper eu sed sed a nisl. Turpis porttitor sodales sit molestie eget eget vel fermentum id. Purus etiam sodales hac adipiscing proin sed varius.
                    </p>
                </div>
                <div className="w-full md:w-2/5 md:mx-16">
                    <h2 className="text-white bg-cyan-700 pl-2"> 
                        About
                    </h2>
                    <div className="pl-4 flex flex-col items-center justify-center py-4">
                        <p className="text-lg">
                        Group Leadership
                        </p>
                        <img className="rounded-full w-24" src={AlexHeadshot} alt="Alex Headshot" />
                        <p>Alexander Hexemer</p>

                        <p className="text-lg pt-4">
                            Team Member Diagram
                        </p>
                        <img className="rounded-lg shadow-lg w-24" src={Diagram} alt="Alex Headshot" />
    
                        <p className="text-lg pt-4">
                            Publications
                        </p>
                        <div className="w-12 aspect-auto">{filesIcon}</div>
                    </div>
                </div>
            </div>
        </section>
    )
}