import React, {useState} from 'react'
import styles from './SearchInput.module.css'

const SearchInput = () => {
  const [search, setSearch] = useState('')
  const [results, setResults] = useState<any>([])

  return (
    <div className={styles.wrapper}>
      <input
        type="text"
        placeholder="Search"
        value={search}
        name="search"
        autoComplete="off"
        onChange={e => setSearch(e.target.value)}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="ionicon"
        viewBox="0 0 512 512"
      >
        <path
          d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
          fill="none"
          stroke="currentColor"
          strokeMiterlimit="10"
          strokeWidth="32"
        />
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="32"
          d="M338.29 338.29L448 448"
        />
      </svg>
      <div className={styles.results}>
        {results &&
          results.length > 0 &&
          results.map(
            (
              result: {
                title:
                  | string
                  | number
                  | boolean
                  | React.ReactElement<
                      any,
                      string | React.JSXElementConstructor<any>
                    >
                  | Iterable<React.ReactNode>
                  | React.ReactPortal
                  | null
                  | undefined
              },
              index: React.Key | null | undefined,
            ) => {
              return (
                <div key={index}>
                  <p>{result.title}</p>
                </div>
              )
            },
          )}
      </div>
    </div>
  )
}

export default SearchInput
