import Post from '@models/Post'
import './styles/styles'
import './babel'

const post = new Post('Webpack Post title');

console.log('Post to string', post.toString())