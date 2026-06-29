export default function HeroStats() {

  const stats = [

    { value: "100+", label: "Projects" },

    { value: "24×7", label: "Support" },

    { value: "15+", label: "Technologies" },

  ];

  return (

    <div className="mt-14 flex gap-12">

      {stats.map((item)=>(

        <div key={item.label}>

          <h3 className="text-4xl font-bold text-blue-900">

            {item.value}

          </h3>

          <p className="mt-2 text-slate-500">

            {item.label}

          </p>

        </div>

      ))}

    </div>

  );

}