
import { MovieTableProps } from './Types k-o/movies'

const MovieTable = ({data}:MovieTableProps) => {
  return (
    <div>
        <table>
            <tbody className='movies'>
            {data.map((item, index) => (
          <tr className="movie-container" key={index}>
            <td className="title">{item.title}</td>
            <td className="year">{item.year}</td>
            <td className="genre">{item.genre}</td>
            <td className="director">{item.director}</td>
            <td>
              <img className="img" src={item.img} alt={item.title} />
            </td>
          </tr>
        ))}
            </tbody>
        </table>
      
    </div>
  )
}

export default MovieTable
