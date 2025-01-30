<script>
	import Codeblock from '$lib/Components/Codeblock.svelte';
</script>

<p>
	You need <a href="https://nodejs.org/en/download/">Node.js</a> and
	<a href="https://v3.tailwindcss.com/">Tailwind CSS installed.</a>
</p>

<ol class="ml-5 list-decimal">
	<li>
		<p>Install the CornbreadUI Library</p>
		<Codeblock
			code={`
yarn add -D cornbread-ui 
npm i -D cornbread-ui
`}
		/>
	</li>
	<li>
		<p>Install the CornbreadUI Library</p>
		<Codeblock
			code={`
import cornbread-ui from "cornbread-ui"
export default {
  //...
  plugins: [
    cornbread-ui,
  ],
}
            `}
		/>
	</li>
</ol>
