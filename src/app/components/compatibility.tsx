import Graph from "./compatibility-graph";

export function CompatibilitySection() {
    return (
        <section className="w-full flex flex-col items-center" style={{ height: '90vh', background: 'linear-gradient(124.7deg, #5755C4 0%, #403F91 50%, #2A295E 100%)' }}>
            <Graph />
            <p className="text-white text-lg font-medium px-4 text-center mb-8">
                ТЫ НЕ СВАЙПАЕШЬ ВАРИАНТЫ - ТЫ СРАЗУ ВИДИШЬ ПОДХОДЯЩИХ СОСЕДЕЙ
            </p>
        </section>
    );
}
