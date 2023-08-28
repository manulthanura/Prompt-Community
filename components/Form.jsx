import Link from 'next/link';

const Form = ({ type, post, setPost, submitting, handleSubmit}) => {
  return (
    <section className="w-full max-w-full">
      <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-10 lg:px-6">
          <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h1 className="head_text text-left">
              <span className="green_gradient">{type} Post</span>
            </h1>
            <p className="desc text-left max-w-md">
              Share your creativity with the world. {type} a prompt that inspires others
            </p>

            <form className="my-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism" onSubmit={handleSubmit}>
              <label>
                <span className="font-satoshi font-semibold text-base text-gray-700">Your Prompt</span>
                <textarea 
                  value={post.prompt}
                  onChange={(e) => setPost({...post, prompt: e.target.value})}
                  placeholder="What is your prompt?"
                  required
                  className="form_textarea"
                />
              </label>
              <label>
                <span className="font-satoshi font-semibold text-base text-gray-700">
                  Tag {``}
                  <span className="font-normal">(#product #web)</span>
                </span>
                <input
                  value={post.tag}
                  onChange={(e) => setPost({...post, tag: e.target.value})}
                  placeholder="#tag"
                  required
                  className="form_input"
                />
              </label>
              <div className="flex-end mx-3 mb-5 gap-4 align-content: center">
                <Link href="/" className="text-black-400">
                  Cancel
                </Link>
                <button
                  type="submit"
                  disabled={submitting}
                  className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                >
                  {submitting ? `${type}...` : type}
                </button>
              </div>
            </form> 
          </div>
          <div class="grid grid-cols-1 gap-4 mt-8">
              <img class="w-full rounded-lg" src="/assets/images/cp.jpg" alt="office content 1"/>
          </div>
      </div>
    </section>

  )
}

export default Form