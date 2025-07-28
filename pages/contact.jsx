import { Form } from "react-router-dom"

export const contactData = async ({ request }) => {
    try {
        const res = await request.formData();
        const data = Object.fromEntries(res);
        console.log(data);
        return null;
    }
    catch (error) {
        console.log(error.message);

    }

}
export const Contact = () => {
    return (
        <div className="max-w-md mx-auto relative overflow-hidden z-10 rounded-2xl shadow-xl shadow-stone-800/70 bg-gradient-to-r to-zinc-950 from-zinc-900 my-12 p-10">

            <h2 className="text-2xl font-bold text-white mb-6">Contact Us</h2>

            <Form method="POST" action="/contact">
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-300" htmlFor="User Name">User Name</label>
                    <input className="mt-1 p-2 w-full bg-zinc-800 border border-gray-600 rounded-md text-white" name="User Name" id="User Name" type="text" />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-300" htmlFor="email">Email Address</label>
                    <input className="mt-1 p-2 w-full bg-zinc-800 border border-gray-600 rounded-md text-white" name="email" id="email" type="email" />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-300" htmlFor="message">Message</label>

                    <textarea className="mt-1 p-2 w-full bg-zinc-800 border border-gray-600 rounded-md text-white" rows="3" name="message"
                        id="message" ></textarea>
                </div>

                <div className="flex justify-end">
                    <button
                        className="bg-gradient-to-r from-gray-700  to-gray-800 text-white px-4 py-2 font-bold rounded-md hover:opacity-80" type="submit" >Send Message</button>
                </div>
            </Form>
        </div>
    )
}