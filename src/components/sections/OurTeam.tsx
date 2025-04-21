interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Palomi Nihalani",
    role: "Wrote the business plan, researched the market",
    image: "/palomi-nihalani.jpg"
  },
  {
    name: "Janna Lu",
    role: "Wrote the business model, researched the market",
    image: "/janna-lu.jpg"
  },
  {
    name: "Neil Raman",
    role: "Made the website, helped write the script",
    image: "/neil-raman.jpg"
  }
];

export const OurTeam = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-4xl font-bold mb-20 text-center text-gray-900">Our Team</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="mb-8 w-full max-w-md aspect-[4/5] overflow-hidden bg-gray-100 rounded-2xl">
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  className="w-full h-full object-cover object-center"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTIgMjJDNi40NzcgMjIgMiAxNy41MjMgMiAxMlM2LjQ3NyAyIDEyIDJzMTAgNC40NzcgMTAgMTAtNC40NzcgMTAtMTAgMTB6bTAtMmE4IDggMCAxIDAgMC0xNiA4IDggMCAwIDAgMCAxNnptMC0xNGE2IDYgMCAxIDEgMCAxMiA2IDYgMCAwIDEgMC0xMnptMCAyYTQgNCAwIDEgMCAwIDggNCA0IDAgMCAwIDAtOHoiIGZpbGw9ImN1cnJlbnRDb2xvciIvPjwvc3ZnPg==';
                  }}
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{member.name}</h3>
              <p className="text-lg text-gray-600 text-center max-w-xs">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 