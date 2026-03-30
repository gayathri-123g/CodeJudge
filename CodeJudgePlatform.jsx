export default function App() {
  const problems = [
    { id: 1, title: 'Two Sum', difficulty: 'Easy' },
    { id: 2, title: 'Longest Substring', difficulty: 'Medium' },
    { id: 3, title: 'Graph Traversal', difficulty: 'Hard' },
  ];

  const submissions = [
    { id: 1, problem: 'Two Sum', status: 'Accepted' },
    { id: 2, problem: 'Graph Traversal', status: 'Wrong Answer' },
  ];

  const leaders = [
    { rank: 1, name: 'GSP', score: 980 },
    { rank: 2, name: 'Alex', score: 920 },
    { rank: 3, name: 'John', score: 870 },
  ];

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        <header className="bg-white rounded-2xl shadow p-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold">CodeJudge Platform</h1>
          <button className="px-4 py-2 rounded-xl bg-black text-white">Login</button>
        </header>

        <section className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-2xl font-semibold mb-4">Problems</h2>
            <div className="space-y-3">
              {problems.map((p) => (
                <div key={p.id} className="border rounded-xl p-4 flex justify-between">
                  <span>{p.title}</span>
                  <span>{p.difficulty}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-2xl font-semibold mb-4">Code Editor</h2>
            <textarea
              className="w-full h-64 border rounded-xl p-4 font-mono"
              defaultValue={`function solve() {\n  console.log('Hello CodeJudge');\n}`}
            />
            <button className="mt-4 px-4 py-2 rounded-xl bg-black text-white">Run Code</button>
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-2xl font-semibold mb-4">Submission History</h2>
            <div className="space-y-3">
              {submissions.map((s) => (
                <div key={s.id} className="border rounded-xl p-4 flex justify-between">
                  <span>{s.problem}</span>
                  <span>{s.status}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-2xl font-semibold mb-4">Leaderboard</h2>
            <div className="space-y-3">
              {leaders.map((l) => (
                <div key={l.rank} className="border rounded-xl p-4 flex justify-between">
                  <span>#{l.rank} {l.name}</span>
                  <span>{l.score}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
