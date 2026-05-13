export default function Resources() {
  return (
    <section id="resources" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Resources & Learning
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore materials and initiatives to support your ESD journey
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Official Resources */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg shadow-md hover:shadow-lg transition">
            <div className="text-4xl mb-4">🌐</div>
            <h3 className="text-xl font-bold mb-4 text-blue-900">Official UN Resources</h3>
            <p className="text-gray-700 mb-6">
              Access official UN resources on the SDGs and ESD initiatives.
            </p>
            <a
              href="https://sdgs.un.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-semibold hover:text-blue-800 transition"
            >
              Visit UN SDG Portal →
            </a>
          </div>

          {/* UNESCO ESD */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-lg shadow-md hover:shadow-lg transition">
            <div className="text-4xl mb-4">📖</div>
            <h3 className="text-xl font-bold mb-4 text-green-900">UNESCO ESD</h3>
            <p className="text-gray-700 mb-6">
              UNESCO's comprehensive resources on Education for Sustainable Development.
            </p>
            <a
              href="https://www.unesco.org/en/education/sustainable-development"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 font-semibold hover:text-green-800 transition"
            >
              Explore UNESCO ESD →
            </a>
          </div>

          {/* Learning Modules */}
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-lg shadow-md hover:shadow-lg transition">
            <div className="text-4xl mb-4">🎓</div>
            <h3 className="text-xl font-bold mb-4 text-purple-900">Learning Modules</h3>
            <p className="text-gray-700 mb-6">
              Interactive courses and modules on sustainable development topics.
            </p>
            <a
              href="#"
              className="text-purple-600 font-semibold hover:text-purple-800 transition"
            >
              Start Learning →
            </a>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-green-500 text-white p-8 md:p-12 rounded-lg text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join the global movement towards sustainable development. Education is the key to unlocking a better future for all.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
            Get Involved Today
          </button>
        </div>
      </div>
    </section>
  )
}
