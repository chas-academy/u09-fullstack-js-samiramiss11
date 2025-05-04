
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Therapies = () => (
   <main className="min-h-screen box-border font-sans antialiased text-gray-700 bg-white">
    <Header />
      {/* Page Header */}

      <section
  className="relative min-h-[70vh] sm:min-h-[80vh] bg-center bg-cover mx-auto mb-6 p-8"
  style={{ backgroundImage: "url('/images/therapies.jpeg')" }}
>
  <div
    className="
      absolute inset-0 bg-black/50 
      flex flex-col       /* mobile: stack */
      sm:flex-row         /* sm+: row */
      sm:items-start      /* align top on row */
      sm:space-x-12       /* gutter on row */
    "
  >
    {/* Intro column */}
    <div className="flex-1 space-y-6 p-6 sm:p-16">
      <h1 className="text-3xl sm:text-4xl font-bold text-white text-center sm:text-left sm:pt-8">
        Therapies and Approaches
      </h1>
      <p className="text-lg text-white text-justify">
      In this section, we explore three key psychotherapy approaches—Cognitive Behavioral Therapy (CBT), Behavioral Therapy, and Psychoanalysis—and how each guides change: CBT reshapes thoughts, Behavioral Therapy modifies actions, and Psychoanalysis uncovers the unconscious forces that drive behavior.
      </p>
    </div>

    {/* In‐page nav: full width on mobile, fixed width on sm+ */}
    <div className="group w-full sm:h-4/6 sm:w-2/6 bg-white/60 md:bg-white/20 p-6 rounded-sm mt-8  md:m-16 text-black pl-8 ">
      <h2 className="text-2xl font-bold md:mt-6 mb-4 sm:pt-6">
        This Article Contains
      </h2>
      <ul className="space-y-3 md:text-gray-900 font-semibold">
        <li><a href="#cbt" className="hover:underline">Cognitive Behavioral Therapy</a></li>
        <li><a href="#behavioral" className="hover:underline">Behavioral Therapy</a></li>
        <li><a href="#psychoanalysis" className="hover:underline">Psychoanalysis</a></li>
      </ul>
    </div>
  </div>
</section>



<div className="max-w-6xl mx-auto space-y-8 px-4 sm:px-6 lg:px-0 mb-14">
        {/* Behavioral Therapy */}
<section id="behavioral" className="bg-background rounded-lg p-8 md:p-12 hover:shadow-lg transition-shadow">
  <h2 className="text-2xl font-semibold text-gray-800 md:m-6 pb-4">
    Behavioral Therapy
  </h2>

  {/* Main description */}
  <p className="text-justify text-gray-600 ">
    Behavioral therapy is based on behaviorism, emphasizing learned responses to environmental stimuli.
    This therapy aims to modify behavior by changing the external environment and teaching new coping skills.
    Behavioral therapy focuses on identifying and changing problematic behaviors that negatively impact a person’s life.
    Complex behaviors could include a range of conducts, from unhealthy eating habits to excessive alcohol consumption.
  </p>

  <p className="text-justify text-gray-600 md:m-12">
    With behavioral therapy, the therapist and the client work together to develop a plan of action, set goals, and identify 
    the behaviors that need to be changed. Behavioral therapy typically involves exposure therapy, desensitization, 
    and positive reinforcement.
  </p>

  {/* Key techniques as a list */}
  <ul className="list-disc list-inside space-y-1 text-gray-600 md:m-12">
    <li>
      <strong>Positive reinforcement</strong> involves rewarding positive behaviors and ignoring negative behaviors.
    </li>
    <li>
      <strong>Exposure therapy</strong> involves gradually exposing the client to the anxiety-inducing situation in a safe 
      and controlled environment.
    </li>
    <li>
      <strong>Desensitization</strong> progressively involves exposing the client to a feared stimulus until they become 
      desensitized.
    </li>
  </ul>
</section>
{/* CBT Section */}
<section id="cbt" className="bg-accent rounded-lg p-8 md:p-12 hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold text-gray-800 md:m-6 pb-4">
            Cognitive Behavioral Therapy (CBT)
          </h2>
          <div className="text-justify space-y-4 max-h-[60vh] overflow-y-auto pr-2 ">
            <p>
            Cognitive behavioral therapy (CBT) is a form of psychological treatment that has been demonstrated to be effective for a range of problems including depression, anxiety disorders, alcohol and drug use problems, marital problems, eating disorders, and severe mental illness. Numerous research studies suggest that CBT leads to significant improvement in functioning and quality of life. In many studies, CBT has been demonstrated to be as effective as, or more effective than, other forms of psychological therapy or psychiatric medications.
            </p>
            
            <p>
            It is important to emphasize that advances in CBT have been made on the basis of both research and clinical practice. Indeed, CBT is an approach for which there is ample scientific evidence that the methods that have been developed actually produce change. In this manner, CBT differs from many other forms of psychological treatment.
            </p>
            <p>
            </p>
            <p className='font-semibold'>CBT is based on several core principles, including:</p>
            <ol className="list-decimal list-inside space-y-1">
              <li>Psychological problems are based, in part, on faulty or unhelpful ways of thinking.</li>
              <li>Psychological problems are based, in part, on learned patterns of unhelpful behavior.</li>
              <li>People suffering from psychological problems can learn better ways of coping with them, thereby relieving their symptoms and becoming more effective in their lives.</li>
            </ol>
            <p>CBT treatment usually involves efforts to change thinking patterns. These strategies might include:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Learning to recognize one’s distortions in thinking …</li>
              <li>Gaining a better understanding of the behavior …</li>
              <li>Using problem-solving skills to cope …</li>
            </ul>
            <p>CBT treatment also usually involves efforts to change behavioral patterns. These strategies might include:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Facing one’s fears instead of avoiding them.</li>
              <li>Using role playing to prepare …</li>
              <li>Learning to calm one’s mind and relax one’s body.</li>
            </ul>
            <p>Not all CBT will use all of these strategies. Rather, the psychologist and patient/client work together, in a collaborative fashion, to develop an understanding of the problem and to develop a treatment strategy.</p>
            <p>CBT places an emphasis on helping individuals learn to be their own therapists. Through exercises in the session as well as “homework” exercises outside of sessions, patients/clients are helped to develop coping skills, whereby they can learn to change their own thinking, problematic emotions, and behavior.</p>
            <p>CBT therapists emphasize what is going on in the person’s current life, rather than what has led up to their difficulties. A certain amount of information about one’s history is needed, but the focus is primarily on moving forward in time to develop more effective ways of coping with life.</p>
            <p className="text-sm text-gray-500">
              Source: APA Div. 12 (Society of Clinical Psychology), 
              American Psychological Association (APA)
            </p>
          </div>
</section>

        {/* Two-column grid for the shorter sections */}
        <section id="psychoanalysis" className="bg-secondary p-8 md:p-16 rounded-lg hover:shadow-lg transition-shadow">
  <h2 className="text-2xl font-semibold text-gray-800 mb-2">Psychoanalysis</h2>
  <p className="text-justify text-gray-800 mb-4">
    Founded by Sigmund Freud in the late 19th century (first clinic opened 1886), psychoanalysis posits that much of our mental life occurs outside conscious awareness.  
    By bringing unconscious conflicts and defense mechanisms into consciousness through techniques such as free association, dream interpretation, and transference analysis,  
    the patient can gain insight into the root causes of distressing thoughts and behaviors.  
    Over the decades, Freud’s ideas were extended by figures like Carl Jung (collective unconscious, 1916) and Melanie Klein (object relations, 1932),  
    giving rise to multiple “schools” of psychodynamic therapy that remain influential in today’s clinical practice.
  </p>
  <ul className="list-disc list-inside text-gray-800 mb-4">
    <li><strong>Free Association:</strong> Encouraging patients to verbalize all thoughts without censorship.</li>
    <li><strong>Dream Analysis:</strong> Interpreting manifest and latent content to reveal hidden wishes.</li>
    <li><strong>Transference:</strong> Examining how feelings about past figures are unconsciously projected onto the therapist.</li>
    <li><strong>Interpretation:</strong> Therapist-guided insights into defenses and unconscious patterns.</li>
  </ul>
  <p className="text-sm text-gray-500">
    <strong>References:</strong><br/>
    Freud, S. (1900). <em>The Interpretation of Dreams</em>. Macmillan.<br/>
    Jung, C. G. (1916). <em>Psychological Types</em>. Collected Works.<br/>
    Klein, M. (1932). “The Psycho-Analysis of Children.” <em>International Journal of Psycho-Analysis</em>.<br/>
    Fonagy, P., & Target, M. (2003). “Psychoanalytic Theories.” In <em>Cognitive-Behavioral and Psychodynamic Interventions</em>.
  </p>
</section>
</div>

    <Footer />
  </main>
);

export default Therapies;
