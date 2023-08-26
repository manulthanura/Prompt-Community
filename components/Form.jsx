import Link from 'next/link';

const Form = ({ type, post, setPost, submitting, handleSubmit}) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{type} Post</span>
      </h1>
      <p className="desc text-left max-w-md">
        {type} a post to the community. Please be kind and respectful.
      </p>

      <form className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism" onSubmit={handleSubmit}>
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
            Prompt Tag
            <span className="font-normal">(#product #web)</span>
          </span>
          <textarea 
            value={post.prompt}
            onChange={(e) => setPost({...post, prompt: e.target.value})}
            placeholder="What is your prompt?"
            required
            className="form_textarea"
          />
        </label>
      </form>
    </section>
  )
}

export default Form