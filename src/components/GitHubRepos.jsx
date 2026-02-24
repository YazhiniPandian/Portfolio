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
    <section id="github" className="section-padding bg-gradient-mesh">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="mb-12 text-center text-3xl font-bold text-white md:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-gradient">GitHub</span> Repositories
        </motion.h2>
        {loading && (
          <div className="flex justify-center py-12">
            <div className="h-10 w-10 animate-spin rounded-full border-2 border-[#00d4ff] border-t-transparent" />
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
                className="glass flex flex-col rounded-xl p-5 transition hover:border-[#00d4ff]/40 hover:shadow-[0_0_25px_rgba(0,212,255,0.15)]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ y: -4 }}
              >
                <div className="mb-2 flex items-center gap-2">
                  <FaGithub className="text-[#00d4ff]" />
                  <span className="font-semibold text-white">{repo.name}</span>
                </div>
                <p className="mb-3 flex-1 text-sm text-gray-400 line-clamp-2">
                  {repo.description || 'No description'}
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-500">
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
              className="inline-flex items-center gap-2 rounded-xl border border-[#00d4ff]/50 px-6 py-3 text-[#00d4ff] transition hover:bg-[#00d4ff]/10"
            >
              <FaGithub /> View all on GitHub
            </a>
          </motion.div>
        )}
      </div>
    </section>
  )
}
