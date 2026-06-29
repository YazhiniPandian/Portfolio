import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaStar } from 'react-icons/fa'

const GITHUB_API = 'https://api.github.com/users/YazhiniPandian/repos?sort=updated&per_page=8'

export default function GitHubRepos() {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(GITHUB_API)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch repos')
        return res.json()
      })
      .then((data) => {
        setRepos(Array.isArray(data) ? data : [])
        setError(null)
      })
      .catch((err) => {
        setError(err.message)
        setRepos([])
      })
      .finally(() => setLoading(false))
  }, [])

  return (
    <section id="github" className="section-padding section-tone-wisteria">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label section-label-light">Open source</p>
          <h2 className="section-title section-title-light">
            <span className="text-gradient-light">GitHub</span> Repositories
          </h2>
        </motion.div>
        {loading && (
          <div className="flex justify-center py-12">
            <div className="h-10 w-10 animate-spin rounded-full border-2 border-[#c69fd5] border-t-transparent" />
          </div>
        )}
        {error && (
          <p className="text-center text-gray-500">
            Unable to load repositories. Check CORS or try again later.
          </p>
        )}
        {!loading && !error && (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {repos.map((repo, i) => (
              <motion.a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-cream flex flex-col p-5 transition hover:glow-cream"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ y: -4 }}
              >
                <div className="mb-2 flex items-center gap-2">
                  <FaGithub className="text-[#c69fd5]" />
                  <span className="font-semibold text-[#c69fd5]">{repo.name}</span>
                </div>
                <p className="mb-3 flex-1 text-sm text-[#c69fd5]/85 line-clamp-2">
                  {repo.description || 'No description'}
                </p>
                <div className="flex items-center gap-2 text-sm text-[#c69fd5]/75">
                  <FaStar className="text-yellow-400" />
                  <span>{repo.stargazers_count}</span>
                </div>
              </motion.a>
            ))}
          </div>
        )}
        {!loading && !error && repos.length > 0 && (
          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <a
              href="https://github.com/YazhiniPandian"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost-light inline-flex items-center gap-2 px-6 py-3"
            >
              <FaGithub /> View all on GitHub
            </a>
          </motion.div>
        )}
      </div>
    </section>
  )
}
