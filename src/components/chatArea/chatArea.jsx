import ChatUser from "../chatUser/ChatUser";

export default function ChatArea() {
    return (
        <div className="w-2/3 bg-slate-100 border-l-2 border-slate-200 h-screen">
            {/* top - user details */}
            <div className="bg-white h-fit">
                <div className="flex items-center py-2 px-4">
                    <div className="w-12 h-12 rounded-full bg-slate-200"></div>
                    <div className="flex flex-col ml-2">
                        <div className="font-bold ">User Name</div>
                        <div className="text-sm text-slate-400">Last seen at 12:00 PM</div>
                    </div>
                </div>
            </div>
            <div>
                <hr className="border-slate-200" />
            </div>
            {/* chat area */}
            <div className="flex flex-col-reverse overflow-y-scroll p-2" style={{ height: "90.5%", }}>
                <div className="">
                    <div className="flex items-center justify-start text-white m-2">
                        <div className="w-fit max-w-xl bg-gray-600 p-2 rounded-3xl">
                            Hello Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste et, necessitatibus odit, quam fugit in deleniti corporis molestias totam nobis libero non consequatur.
                        </div>
                    </div>
                    <div className="flex items-center justify-end text-white m-2">
                        <div className="w-fit max-w-xl bg-green-600 p-2 rounded-3xl">
                            Hello llorem23

                        </div>
                    </div>

                    <div className="flex items-center justify-end text-white m-2">
                        <div className="w-fit max-w-xl bg-green-600 p-2 rounded-3xl">
                            Hello llorem23
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam voluptates recusandae sed id quis similique cupiditate quas unde enim odit voluptatem esse itaque iusto, maxime, aspernatur nihil corporis voluptas! Molestias a magnam similique ipsum repellat commodi autem! Rerum, minima voluptates provident qui asperiores delectus quidem blanditiis repudiandae tempora expedita neque, necessitatibus culpa saepe. Nisi ex consequuntur saepe, recusandae vero quo illum architecto! Officia, ipsam hic quis dolorem optio nostrum alias odit animi, fuga natus rem obcaecati reprehenderit velit reiciendis exercitationem esse, laboriosam sunt consectetur sed corporis ducimus ut dicta? Tempora eveniet dolorum dolores distinctio esse omnis autem? Quia ipsam dolore beatae tempora consequatur. Nulla quae maxime doloremque libero ea praesentium possimus dicta pariatur perferendis, quisquam sapiente ad quaerat dolorem maiores modi numquam, eos incidunt provident facere aliquid quibusdam assumenda? Maxime, inventore at similique sed, commodi earum nostrum veritatis odit aliquam quae in assumenda illo cupiditate accusamus sequi nulla modi reprehenderit? Nisi officiis, omnis adipisci nemo doloremque nostrum at quo itaque eligendi aperiam quisquam impedit, sunt id magnam eveniet ex recusandae, alias maiores animi voluptatibus perferendis? Quisquam dolorem adipisci ex, omnis laudantium delectus veniam minima! Eaque quasi accusamus ab debitis sunt sapiente eos adipisci reprehenderit cum odit recusandae tempora nemo, autem tenetur sit vel cumque, quidem molestias enim rem perferendis porro minus asperiores. Possimus, dolorum consectetur? Perspiciatis ut, at quaerat enim odio ducimus. Unde, ut. Blanditiis voluptatibus error labore perspiciatis, magnam autem quo non corrupti a asperiores odio exercitationem, laborum rerum dolore sequi placeat aut quidem nesciunt quos fugiat, incidunt commodi nam cupiditate corporis? Corrupti, cum similique mollitia, eum blanditiis nulla quisquam praesentium officiis quibusdam atque ipsam iste tempora ea quas quam placeat quidem a eaque sed est enim, ab quod commodi deserunt! Odio cupiditate iusto, necessitatibus saepe culpa voluptates eum, nostrum quibusdam itaque architecto vel. Unde ea, mollitia, quibusdam debitis voluptate deleniti sapiente explicabo incidunt atque magnam eum magni error tempora molestias consequatur tempore inventore blanditiis quam odio nulla asperiores dolores repudiandae fugit cumque? Incidunt fuga aperiam eaque quae ipsum. Eligendi maxime aliquid odio libero ipsam fugiat accusantium officiis in labore accusamus!
                        </div>
                    </div>
                    
                </div>

                {/* send message */}
                <div className="fixed bottom-0 bg-white w-2/3 flex rounded-lg -ml-2 z-10">
                    <input className="outline-none bg-transparent w-full text-lg px-4 rounded-md placeholder:text-sm" type="text" placeholder="Type message..." />
                    <button className="bg-blue-800 text-white w-/3 rounded-full font-bold p-2 px-4 ">Send</button>
                </div>
            </div>
        </div>
    )
}