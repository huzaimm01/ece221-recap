const chapters = [
            {
                number: 1,
                title: "Field Theory & Vector Fundamentals",
                topics: "Vector operations, coordinate systems, field concepts",
                content: `
                    <h2>Field Theory & Vector Fundamentals</h2>
                    
                    <h3>The Concept of a Field</h3>
                    <p>A vector field is a mathematical description of a physical quantity that has magnitude and direction at every point in space. The field exists independently of any test charge used to measure it.</p>
                    
                    <h3>Field Types</h3>
                    <ul>
                        <li><strong>Scalar Fields:</strong> Single value at every point (e.g., Electric Potential V)</li>
                        <li><strong>Vector Fields:</strong> Magnitude and direction (e.g., Electric Field E or Magnetic Flux Density B)</li>
                    </ul>

                    <h3>Vector Algebra</h3>
                    <div class="formula">Dot Product: A · B (scalar result)<br>Represents projection, used in work: dW = -qE · dl</div>
                    <div class="formula">Cross Product: A × B (vector result)<br>Perpendicular to both vectors, used in torque and magnetic forces</div>

                    <h3>Coordinate Systems</h3>
                    <p><strong>Cartesian (x, y, z):</strong> Best for rectangular geometries like parallel-plate capacitors</p>
                    <div class="formula">Position Vector: R = x𝐱̂ + y𝐲̂ + z𝐳̂<br>Gradient: ∇V = (∂V/∂x)𝐱̂ + (∂V/∂y)𝐲̂ + (∂V/∂z)𝐳̂</div>

                    <p><strong>Cylindrical (r, φ, z):</strong> Best for axial symmetry, coaxial cables, infinite line charges</p>
                    <div class="formula">Transformation: x = r cos(φ), y = r sin(φ)<br>r = √(x² + y²)</div>

                    <p><strong>Spherical (R, θ, φ):</strong> Essential for point charges and spherical shells</p>
                    <div class="formula">R: radial distance from origin<br>θ: polar angle (0 ≤ θ ≤ π)<br>φ: azimuthal angle (0 ≤ φ < 2π)<br>Differential Volume: R² sin(θ) dR dθ dφ</div>

                    <h3>Vector Operators</h3>
                    <p><strong>Gradient (∇S):</strong> Rate of change of scalar field, points toward maximum increase</p>
                    <p><strong>Divergence (∇ · D):</strong> Measures flux density leaving a point, relates to charge density</p>
                    <div class="formula">∇ · D = ρᵥ (Gauss's Law)</div>

                    <h3>Important Theorems</h3>
                    <div class="formula">Divergence Theorem: ∮ₛ D · ds = ∫ᵥ (∇ · D) dv</div>
                    <div class="formula">Stokes' Theorem: ∮ₗ E · dl = ∫ₛ (∇ × E) · ds</div>
                `
            },
            {
                number: 2,
                title: "Electrostatics & Dielectrics",
                topics: "Coulomb's law, electric fields, Gauss's law, polarization",
                content: `
                    <h2>Electrostatics & Dielectrics</h2>
                    
                    <h3>Coulomb's Law</h3>
                    <p>Describes the electrostatic force between two point charges:</p>
                    <div class="formula">F = (1/4πε) × (q₁q₂/R²) R̂<br>k = 1/4πε₀ ≈ 8.99 × 10⁹ N·m²/C²<br>ε₀ ≈ 8.85 × 10⁻¹² C²/(N·m²)</div>
                    <p><strong>Superposition:</strong> Total force is the vector sum of forces from all charges</p>

                    <h3>Electric Field Intensity (E)</h3>
                    <p>Vector field representing electrostatic force per unit charge:</p>
                    <div class="formula">E = F/q (units: N/C or V/m)</div>
                    
                    <p><strong>For point charges:</strong></p>
                    <div class="formula">E_tot = Σ (qᵢ/4πεRᵢ²) R̂ᵢ</div>

                    <p><strong>For continuous distributions:</strong> Charges distributed across lines (ρₗ), surfaces (ρₛ), or volumes (ρᵥ)</p>

                    <h3>Gauss's Law</h3>
                    <p>The total electric flux through a closed surface equals the enclosed charge:</p>
                    <div class="formula">Integral Form: Ψ = ∮ₛ D · ds = Q_enc<br>Differential Form: ∇ · D = ρᵥ (Maxwell's first equation)</div>

                    <p><strong>Applications with symmetry:</strong></p>
                    <ul>
                        <li>Infinite line charge: E = ρₗ/(2πεr) r̂</li>
                        <li>Spherical shell: Use Gauss's law with spherical symmetry</li>
                    </ul>

                    <h3>Dielectrics and Polarization</h3>
                    <p><strong>Induced Dipoles:</strong> External E field causes electron clouds to shift, forming local dipoles</p>
                    
                    <p><strong>Polarization Vector (P):</strong> Density of electric dipole moments per unit volume</p>
                    <div class="formula">For linear/isotropic materials: P = χₑε₀E<br>χₑ = electric susceptibility</div>

                    <p><strong>Total Flux Density:</strong></p>
                    <div class="formula">D = ε₀E + P = εE</div>

                    <h3>Dielectric Breakdown</h3>
                    <p>Occurs when E field is strong enough to ionize molecules, turning insulator into conductor</p>
                    <p><strong>Dielectric Strength (E_ds):</strong> Minimum E at which breakdown occurs, causing sparks and damage</p>
                `
            },
            {
                number: 3,
                title: "Electric Potential & Energy",
                topics: "Voltage, equipotential surfaces, capacitance, energy storage",
                content: `
                    <h2>Electric Potential & Energy</h2>
                    
                    <h3>Electric Potential (V)</h3>
                    <p>Electric potential energy per unit charge:</p>
                    <div class="formula">Potential Difference: V₂₁ = V₂ - V₁ = W/q = -∫₁² E · dl (Volts)</div>

                    <p><strong>Path Independence:</strong> Work done moving a charge between two points is independent of path (conservative field)</p>

                    <p><strong>Absolute Voltage:</strong> Voltage between a point and reference (usually infinity where V = 0)</p>

                    <h3>Relationship Between E and V</h3>
                    <div class="formula">E = -∇V</div>
                    <p>Electric field points in direction of maximum potential decrease</p>

                    <h3>Poisson's and Laplace's Equations</h3>
                    <div class="formula">Poisson's Equation: ∇²V = -ρᵥ/ε<br>Laplace's Equation: ∇²V = 0 (charge-free regions)</div>

                    <h3>Equipotential Surfaces</h3>
                    <p>Points with same electric potential form equipotential surfaces</p>
                    <p><strong>Zero Work:</strong> No work is done moving a charge along equipotential surface (motion perpendicular to E)</p>

                    <h3>Capacitance (C)</h3>
                    <p>Ratio of charge to potential difference:</p>
                    <div class="formula">C = Q/V</div>

                    <p><strong>Geometry Dependence:</strong> Capacitance depends on physical structure and dielectric material</p>
                    <div class="formula">Parallel Plates: C = εA/d<br>A = plate area, d = separation distance</div>

                    <h3>Electrostatic Energy</h3>
                    <div class="formula">Energy Stored in Capacitor: Wₑ = ½CV²</div>
                    <div class="formula">Energy Density: wₑ = ½εE² (energy per unit volume)</div>

                    <p><strong>Forces on Plates:</strong> Attractive force exists between positive and negative plates in direction of E</p>
                `
            },
            {
                number: 4,
                title: "Magnetostatics",
                topics: "Magnetic forces, Biot-Savart law, Ampère's law, magnetic materials",
                content: `
                    <h2>Magnetostatics</h2>
                    
                    <h3>Magnetic Forces & Lorentz Force</h3>
                    <p>Magnetic fields exert forces only on moving charges:</p>
                    <div class="formula">Magnetic Force: Fₘ = q(u × B)</div>
                    <div class="formula">Lorentz Force: F = q(E + u × B)</div>

                    <p><strong>Right-Hand Rule:</strong> Direction of Fₘ perpendicular to both velocity u and magnetic field B</p>

                    <p><strong>Zero Work:</strong> Magnetic field does no work (Fₘ always perpendicular to motion), cannot change kinetic energy, only changes direction</p>

                    <h3>Forces on Current-Carrying Conductors</h3>
                    <p>Current is collection of moving charges, so wires experience forces:</p>
                    <div class="formula">Straight Wire: Fₘ = I(L × B)</div>

                    <p><strong>Closed Loops:</strong> Total magnetic force on closed current loop in uniform B field is zero</p>

                    <p><strong>Parallel Conductors:</strong> Same direction currents attract, opposite currents repel</p>

                    <h3>Magnetic Torque & Dipole Moment</h3>
                    <p>Torque causes current loop to rotate:</p>
                    <div class="formula">Torque: T = m × B<br>Magnetic Dipole Moment: m = AI n̂<br>A = loop area, I = current, n̂ = normal vector</div>

                    <p><strong>Magnetic Dipole:</strong> Current loop with dimensions much smaller than observation distance</p>

                    <h3>Biot-Savart Law</h3>
                    <p>Calculate magnetic field from steady-state current element:</p>
                    <div class="formula">dH = (I/4π) × (dl × R̂)/R²</div>

                    <p><strong>Continuous Distributions:</strong></p>
                    <div class="formula">Surface Current: H = (1/4π) ∫ₛ (Jₛ × R̂)/R² ds<br>Volume Current: H = (1/4π) ∫ᵥ (Jᵥ × R̂)/R² dv</div>

                    <div class="formula">Infinite Wire: B = μ₀I/(2πR) φ̂</div>

                    <h3>Ampère's Circuital Law</h3>
                    <div class="formula">Integral Form: ∮_C H · dl = I<br>Differential Form: ∇ × H = J (steady-state)</div>

                    <p><strong>Symmetry:</strong> Choose path where H magnitude is uniform (infinite wires, solenoids)</p>

                    <div class="formula">Magnetic Flux Density: B = μH</div>

                    <h3>Magnetic Materials & Permeability</h3>
                    <div class="formula">Permeability: μ = μ₀μᵣ<br>Relative Permeability: μᵣ = 1 + χₘ<br>χₘ = magnetic susceptibility</div>

                    <p><strong>Gauss's Law for Magnetism:</strong></p>
                    <div class="formula">∇ · B = 0</div>
                    <p>Magnetic field lines always form closed loops, no magnetic monopoles exist</p>
                `
            },
            {
                number: 5,
                title: "Time-Varying Fields & Maxwell's Equations",
                topics: "Faraday's law, induced EMF, displacement current, Maxwell's equations",
                content: `
                    <h2>Time-Varying Fields & Maxwell's Equations</h2>
                    
                    <h3>Faraday's Law of Induction</h3>
                    <p>Changing magnetic field produces electric current when magnetic flux through loop changes:</p>
                    <div class="formula">Induced EMF: V_emf = -N dΦ/dt<br>Magnetic Flux: Φ = ∫ₛ B · ds</div>

                    <p><strong>Lenz's Law:</strong> Negative sign indicates induced current opposes flux change that produced it</p>

                    <h3>Transformer vs. Motional EMF</h3>
                    <p><strong>Transformer EMF:</strong> Time-varying B field, stationary loop</p>
                    <div class="formula">V_emf^tr = -N ∫ₛ (∂B/∂t) · ds</div>

                    <p><strong>Motional EMF:</strong> Moving conductor/loop in static B field</p>
                    <div class="formula">V_emf^m = ∮_c (u × B) · dl</div>

                    <p><strong>Total EMF:</strong> When both field and loop change, EMF is sum of both components</p>

                    <h3>Maxwell's Correction: Displacement Current</h3>
                    <p><strong>The Problem:</strong> Original Ampère's Law inconsistent for non-steady currents (charging capacitors)</p>

                    <p><strong>Displacement Current:</strong> Maxwell proposed changing electric flux also creates magnetic field</p>
                    <div class="formula">I_d = ∫ₛ (∂D/∂t) · ds</div>

                    <p><strong>Significance:</strong> Though I_d doesn't involve free charge transport, it generates magnetic fields like real current</p>

                    <h3>Maxwell's Equations: Unifying Framework</h3>
                    <p>The four fundamental equations of electromagnetism:</p>

                    <div class="formula">1. Gauss's Law: ∇ · D = ρᵥ<br>Charges are sources of electric flux</div>

                    <div class="formula">2. No Magnetic Monopoles: ∇ · B = 0<br>Magnetic field lines always close, no isolated magnetic charges</div>

                    <div class="formula">3. Faraday's Law: ∇ × E = -∂B/∂t<br>Changing magnetic field induces circulating electric field</div>

                    <div class="formula">4. Ampère-Maxwell Law: ∇ × H = J + ∂D/∂t<br>Current and changing electric fields induce magnetic fields</div>
                `
            },
            {
                number: 6,
                title: "Boundary Conditions & Interfaces",
                topics: "Material interfaces, field discontinuities, conductor boundaries",
                content: `
                    <h2>Boundary Conditions & Interfaces</h2>
                    
                    <h3>Introduction to Material Interfaces</h3>
                    <p><strong>Discontinuity:</strong> Fields continuous inside uniform medium but change abruptly at boundaries between different materials</p>

                    <p><strong>Analysis:</strong> Components analyzed relative to n̂₂, unit vector pointing outward from Medium 2</p>

                    <h3>Electric Boundary Conditions</h3>
                    <p><strong>Tangential E:</strong> Always continuous across any boundary</p>
                    <div class="formula">E₁ₜ = E₂ₜ</div>

                    <p>At conductor interface (M₂):</p>
                    <div class="formula">E₁ₜ = E₂ₜ = 0<br>(field inside perfect conductor is zero)</div>

                    <p><strong>Normal D:</strong> Discontinuous if surface charge ρₛ exists</p>
                    <div class="formula">D₁ₙ - D₂ₙ = ρₛ</div>

                    <p>For two dielectrics with no free surface charge:</p>
                    <div class="formula">D₁ₙ = D₂ₙ</div>

                    <h3>Magnetic Boundary Conditions</h3>
                    <p><strong>Normal B:</strong> Always continuous</p>
                    <div class="formula">B₁ₙ = B₂ₙ<br>Implies: μ₁H₁ₙ = μ₂H₂ₙ</div>

                    <p><strong>Tangential H:</strong> Discontinuous if surface current Jₛ exists</p>
                    <div class="formula">n̂₂ × (H₁ - H₂) = Jₛ</div>

                    <p>If both media have finite conductivities:</p>
                    <div class="formula">Jₛ = 0, so H₁ₜ = H₂ₜ</div>
                `
            },
            {
                number: 7,
                title: "Energy, Power & Applications",
                topics: "Inductance, energy density, transformers, Poynting vector",
                content: `
                    <h2>Energy, Power & Applications</h2>
                    
                    <h3>Self and Mutual Inductance</h3>
                    <p><strong>Inductance (L):</strong> Ratio of magnetic flux linkage to current</p>
                    <div class="formula">L = Λ/I</div>

                    <p><strong>Solenoid Example:</strong></p>
                    <div class="formula">L = μ(N²/l)S<br>N = turns, l = length, S = area</div>

                    <p><strong>Mutual Inductance (L₁₂):</strong> Magnetic coupling where current in one loop produces flux through second loop</p>

                    <h3>Field Energy Density</h3>
                    <div class="formula">Electrostatic Energy Density: wₑ = ½εE²</div>
                    <div class="formula">Magnetic Energy Density: wₘ = ½μH²</div>

                    <p><strong>Total Field Energy:</strong> Integrate density over entire volume containing field</p>

                    <h3>The Ideal Transformer</h3>
                    <p>Uses two coils on magnetic core to transfer energy via magnetic flux</p>

                    <p><strong>Turns Ratio:</strong></p>
                    <div class="formula">Voltage: V₁/V₂ = N₁/N₂<br>Current: I₁/I₂ = N₂/N₁</div>

                    <p><strong>Impedance Matching:</strong></p>
                    <div class="formula">Input Impedance: Z_in = (N₁/N₂)² Z_L</div>

                    <h3>Charge-Current Continuity Relation</h3>
                    <p><strong>Conservation of Charge:</strong> Total current flowing out of volume equals rate of decrease of enclosed charge</p>
                    <div class="formula">Differential Form: ∇ · J = -∂ρᵥ/∂t</div>

                    <p><strong>Steady State:</strong> For steady currents</p>
                    <div class="formula">∇ · J = 0 (leads to Kirchhoff's Current Law)</div>

                    <h3>Power Flow & Poynting Vector</h3>
                    <p>Electromagnetic waves carry energy through space</p>

                    <p><strong>Poynting Vector (S):</strong> Power density (W/m²) flowing through surface</p>
                    <div class="formula">S = E × H</div>

                    <p>Direction indicates wave propagation direction</p>
                `
            }
        ];

        const quizQuestions = [
            {
                chapter: 1,
                question: "What is the fundamental difference between a scalar field and a vector field?",
                options: [
                    "Scalar fields exist only in 2D space while vector fields exist in 3D space",
                    "Scalar fields have only magnitude at each point while vector fields have both magnitude and direction",
                    "Scalar fields are always constant while vector fields vary with position",
                    "Scalar fields can only represent temperature while vector fields represent force"
                ],
                correct: 1,
                explanation: "A scalar field is represented by a single value (magnitude only) at every point in space, like electric potential V. A vector field has both magnitude and direction at every point, like electric field E or magnetic flux density B."
            },
            {
                chapter: 1,
                question: "The dot product A · B results in what type of quantity and is used to calculate what?",
                options: [
                    "A vector; used to calculate torque",
                    "A scalar; used to calculate work done by a field",
                    "A tensor; used to calculate flux",
                    "A vector; used to calculate magnetic force"
                ],
                correct: 1,
                explanation: "The dot product results in a scalar value and physically represents the projection of one vector onto another. It's used to calculate work done by a field: dW = -qE · dl."
            },
            {
                chapter: 1,
                question: "Which coordinate system is best suited for analyzing an infinite line charge?",
                options: [
                    "Cartesian (x, y, z)",
                    "Cylindrical (r, φ, z)",
                    "Spherical (R, θ, φ)",
                    "All coordinate systems work equally well"
                ],
                correct: 1,
                explanation: "Cylindrical coordinates are ideal for systems with axial symmetry, such as infinite line charges or coaxial cables. The r-component naturally describes the radial distance from the line."
            },
            {
                chapter: 1,
                question: "What does the divergence of a vector field (∇ · D) physically represent?",
                options: [
                    "The rotation or curl of the field at a point",
                    "The rate of change of the field in space",
                    "The measure of flux density leaving a point, related to charge density",
                    "The gradient of the field's magnitude"
                ],
                correct: 2,
                explanation: "Divergence measures the 'flux density' leaving a point. For electric flux density, it relates directly to charge density through ∇ · D = ρᵥ (Gauss's Law in differential form)."
            },
            {
                chapter: 1,
                question: "The Divergence Theorem converts which type of integral to which other type?",
                options: [
                    "Line integral to surface integral",
                    "Surface integral to line integral",
                    "Closed surface integral to volume integral",
                    "Volume integral to line integral"
                ],
                correct: 2,
                explanation: "The Divergence Theorem states: ∮ₛ D · ds = ∫ᵥ (∇ · D) dv, converting a closed surface integral into a volume integral over the region enclosed by that surface."
            },
            {
                chapter: 2,
                question: "In Coulomb's Law, what happens to the force between two charges if the distance between them is doubled?",
                options: [
                    "The force is halved",
                    "The force is quartered (reduced by factor of 4)",
                    "The force is doubled",
                    "The force remains the same"
                ],
                correct: 1,
                explanation: "Coulomb's Law has an inverse square relationship: F ∝ 1/R². If distance doubles, R² becomes 4R², so the force is reduced by a factor of 4 (quartered)."
            },
            {
                chapter: 2,
                question: "The principle of superposition in electrostatics states that:",
                options: [
                    "Electric fields can exist in multiple states simultaneously",
                    "The total force on a charge is the vector sum of forces from all other individual charges",
                    "Charges always arrange themselves to minimize total energy",
                    "Electric field lines never cross"
                ],
                correct: 1,
                explanation: "Superposition means that the total force (or field) on a charge is the vector sum of forces (or fields) from all other individual charges in the system. Each charge contributes independently."
            },
            {
                chapter: 2,
                question: "According to Gauss's Law in differential form, what does ∇ · D = ρᵥ tell us?",
                options: [
                    "The curl of the displacement field equals charge density",
                    "The divergence of the displacement field equals volume charge density",
                    "The gradient of the displacement field equals charge density",
                    "The laplacian of the displacement field equals charge density"
                ],
                correct: 1,
                explanation: "This is Maxwell's first equation: the divergence of the electric displacement field D at any point equals the volume charge density ρᵥ at that point. It's the differential form of Gauss's Law."
            },
            {
                chapter: 2,
                question: "What happens when a dielectric material is placed in an external electric field?",
                options: [
                    "The material becomes permanently magnetized",
                    "The electron clouds shift to form local dipoles aligned with the field",
                    "The material's temperature increases significantly",
                    "The material becomes a conductor"
                ],
                correct: 1,
                explanation: "An external E field causes the electron clouds in dielectric atoms to shift, forming induced dipoles. This polarization is represented by the polarization vector P, showing the density of electric dipole moments per unit volume."
            },
            {
                chapter: 2,
                question: "Dielectric breakdown occurs when:",
                options: [
                    "The dielectric material melts due to heat",
                    "The electric field is strong enough to ionize molecules, turning the insulator into a conductor",
                    "The material reaches its maximum charge storage capacity",
                    "Two dielectric materials come into contact"
                ],
                correct: 1,
                explanation: "Dielectric breakdown happens when the E field exceeds the dielectric strength (E_ds), causing electrons to detach from molecules and ionize the material, turning it from insulator to conductor, often resulting in sparks."
            },
            {
                chapter: 3,
                question: "The relationship between electric field E and electric potential V is:",
                options: [
                    "E = ∇V",
                    "E = -∇V",
                    "V = -∇E",
                    "V = ∇ × E"
                ],
                correct: 1,
                explanation: "The electric field is the negative gradient of the potential: E = -∇V. The negative sign means E points in the direction of maximum potential decrease."
            },
            {
                chapter: 3,
                question: "Why is no work done when moving a charge along an equipotential surface?",
                options: [
                    "Because the electric field is zero on equipotential surfaces",
                    "Because the motion is always perpendicular to the electric field",
                    "Because equipotential surfaces only exist in vacuum",
                    "Because charges naturally follow equipotential paths"
                ],
                correct: 1,
                explanation: "Equipotential surfaces are always perpendicular to electric field lines. Since work = qE · dl, and the path dl is perpendicular to E on an equipotential surface, the dot product is zero, so no work is done."
            },
            {
                chapter: 3,
                question: "For a parallel-plate capacitor, what happens to capacitance if the plate separation distance is doubled while keeping everything else constant?",
                options: [
                    "Capacitance doubles",
                    "Capacitance is halved",
                    "Capacitance is quartered",
                    "Capacitance remains the same"
                ],
                correct: 1,
                explanation: "For parallel plates, C = εA/d. Capacitance is inversely proportional to separation distance d. If d doubles, capacitance is halved."
            },
            {
                chapter: 3,
                question: "Laplace's equation (∇²V = 0) is used in which type of region?",
                options: [
                    "Regions with high charge density",
                    "Charge-free regions",
                    "Regions with magnetic fields only",
                    "Regions at absolute zero temperature"
                ],
                correct: 1,
                explanation: "Laplace's equation applies in charge-free regions where ρᵥ = 0. When charges are present, we use Poisson's equation: ∇²V = -ρᵥ/ε instead."
            },
            {
                chapter: 3,
                question: "The energy stored in a capacitor can be expressed as:",
                options: [
                    "Wₑ = CV",
                    "Wₑ = ½CV²",
                    "Wₑ = 2CV²",
                    "Wₑ = CV²"
                ],
                correct: 1,
                explanation: "The energy stored in a capacitor is Wₑ = ½CV². This can also be written as ½QV or ½Q²/C. The energy density (per unit volume) is wₑ = ½εE²."
            },
            {
                chapter: 4,
                question: "Why does a magnetic field do no work on a moving charged particle?",
                options: [
                    "Because magnetic fields are too weak to transfer energy",
                    "Because the magnetic force is always perpendicular to the particle's velocity",
                    "Because magnetic fields only exist in conductors",
                    "Because charges lose their energy when moving through magnetic fields"
                ],
                correct: 1,
                explanation: "The magnetic force Fₘ = q(u × B) is always perpendicular to velocity u (from the cross product). Since work = F · displacement and F is perpendicular to motion, no work is done. Magnetic fields can only change direction of motion, not kinetic energy."
            },
            {
                chapter: 4,
                question: "What is the Lorentz force?",
                options: [
                    "The force between two magnets",
                    "The total force on a charge in both electric and magnetic fields: F = q(E + u × B)",
                    "The force that creates magnetic fields from currents",
                    "The force between parallel current-carrying wires"
                ],
                correct: 1,
                explanation: "The Lorentz force is the total electromagnetic force on a charged particle: F = q(E + u × B), combining both electric force (qE) and magnetic force (qu × B)."
            },
            {
                chapter: 4,
                question: "Two parallel wires carrying currents in the same direction will:",
                options: [
                    "Repel each other",
                    "Attract each other",
                    "Experience no force",
                    "Create a uniform magnetic field between them"
                ],
                correct: 1,
                explanation: "Parallel conductors with currents in the same direction attract each other, while opposite currents cause repulsion. This is due to the magnetic fields each wire creates affecting the other."
            },
            {
                chapter: 4,
                question: "The Biot-Savart Law is used to calculate:",
                options: [
                    "Electric field from static charges",
                    "Magnetic field from steady-state current elements",
                    "Voltage across a resistor",
                    "Capacitance of parallel plates"
                ],
                correct: 1,
                explanation: "The Biot-Savart Law calculates the magnetic field intensity H generated by a steady-state current element: dH = (I/4π) × (dl × R̂)/R²."
            },
            {
                chapter: 4,
                question: "Gauss's Law for Magnetism (∇ · B = 0) implies that:",
                options: [
                    "Magnetic fields don't exist in vacuum",
                    "Magnetic field lines always form closed loops and magnetic monopoles don't exist",
                    "Magnetic fields are always uniform",
                    "Magnetic forces are conservative"
                ],
                correct: 1,
                explanation: "∇ · B = 0 means magnetic field lines have no beginning or end—they always form closed loops. This is equivalent to saying magnetic monopoles (isolated north or south poles) don't exist."
            },
            {
                chapter: 5,
                question: "Faraday's Law states that the induced EMF is proportional to:",
                options: [
                    "The magnetic field strength",
                    "The rate of change of magnetic flux through a loop",
                    "The current in the loop",
                    "The area of the loop"
                ],
                correct: 1,
                explanation: "Faraday's Law: V_emf = -N dΦ/dt. The induced EMF is proportional to how quickly the magnetic flux through the loop is changing. The negative sign is Lenz's Law."
            },
            {
                chapter: 5,
                question: "What does Lenz's Law (the negative sign in Faraday's Law) indicate?",
                options: [
                    "Magnetic flux is always negative",
                    "The induced current creates a magnetic field opposing the flux change that produced it",
                    "EMF is always in the opposite direction to current",
                    "Energy is lost in the induction process"
                ],
                correct: 1,
                explanation: "Lenz's Law (the negative sign) means the induced current flows in a direction such that its magnetic field opposes the change in flux that created it. This is a consequence of energy conservation."
            },
            {
                chapter: 5,
                question: "What is motional EMF?",
                options: [
                    "EMF produced by a time-varying magnetic field in a stationary loop",
                    "EMF produced by a moving conductor or loop in a static magnetic field",
                    "EMF that creates motion in conductors",
                    "EMF in motors only"
                ],
                correct: 1,
                explanation: "Motional EMF is produced when a conductor or loop moves through a static magnetic field: V_emf^m = ∮_c (u × B) · dl. This is different from transformer EMF where the field changes but the loop is stationary."
            },
            {
                chapter: 5,
                question: "Maxwell's displacement current concept was introduced to solve what problem?",
                options: [
                    "Inconsistency in Gauss's Law",
                    "Inconsistency in original Ampère's Law for non-steady currents like charging capacitors",
                    "Problems with Faraday's Law in conductors",
                    "Inability to explain magnetic monopoles"
                ],
                correct: 1,
                explanation: "Original Ampère's Law was inconsistent for time-varying situations (like charging capacitors where current flows but no charge crosses the gap). Maxwell added displacement current I_d = ∫ₛ (∂D/∂t) · ds to fix this."
            },
            {
                chapter: 5,
                question: "Which of Maxwell's equations states that there are no magnetic monopoles?",
                options: [
                    "∇ · D = ρᵥ",
                    "∇ · B = 0",
                    "∇ × E = -∂B/∂t",
                    "∇ × H = J + ∂D/∂t"
                ],
                correct: 1,
                explanation: "∇ · B = 0 (Gauss's Law for Magnetism) states that the divergence of magnetic field is always zero, meaning magnetic field lines always close on themselves and isolated magnetic charges (monopoles) don't exist."
            },
            {
                chapter: 6,
                question: "At the boundary between two dielectric materials with no free surface charge, which condition must be satisfied?",
                options: [
                    "E₁ₙ = E₂ₙ",
                    "D₁ₙ = D₂ₙ",
                    "Both E and D must be continuous",
                    "All components are discontinuous"
                ],
                correct: 1,
                explanation: "For two dielectrics with no free surface charge (ρₛ = 0), the normal component of D is continuous: D₁ₙ = D₂ₙ. The tangential component of E is always continuous: E₁ₜ = E₂ₜ."
            },
            {
                chapter: 6,
                question: "What happens to the tangential component of the electric field at a conductor boundary?",
                options: [
                    "It increases by a factor of the permittivity",
                    "It goes to zero because the field inside a perfect conductor is zero",
                    "It doubles in magnitude",
                    "It becomes perpendicular to the surface"
                ],
                correct: 1,
                explanation: "At a conductor interface, E₁ₜ = E₂ₜ = 0 because the electric field inside a perfect conductor is zero. All the electric field must be perpendicular to the conductor surface."
            },
            {
                chapter: 6,
                question: "The normal component of magnetic field B at a boundary between two materials is:",
                options: [
                    "Always discontinuous",
                    "Always continuous",
                    "Zero on both sides",
                    "Discontinuous only if surface current exists"
                ],
                correct: 1,
                explanation: "The normal component of B is always continuous across any boundary: B₁ₙ = B₂ₙ, which also means μ₁H₁ₙ = μ₂H₂ₙ. This follows from ∇ · B = 0."
            },
            {
                chapter: 6,
                question: "When is the tangential component of H discontinuous at a boundary?",
                options: [
                    "Always, at every boundary",
                    "When surface current Jₛ exists at the interface",
                    "Never, it's always continuous",
                    "Only in vacuum"
                ],
                correct: 1,
                explanation: "The tangential H is discontinuous when surface current exists: n̂₂ × (H₁ - H₂) = Jₛ. If both media have finite conductivities with no surface current (Jₛ = 0), then H₁ₜ = H₂ₜ."
            },
            {
                chapter: 6,
                question: "Which field component is ALWAYS continuous across any boundary?",
                options: [
                    "Normal component of D",
                    "Tangential component of E",
                    "Tangential component of H",
                    "Normal component of H"
                ],
                correct: 1,
                explanation: "The tangential component of the electric field E is always continuous across any boundary: E₁ₜ = E₂ₜ. This is a fundamental boundary condition."
            },
            {
                chapter: 7,
                question: "For an ideal transformer, if the primary coil has twice as many turns as the secondary coil, what is the voltage relationship?",
                options: [
                    "V₁ = V₂",
                    "V₁ = 2V₂",
                    "V₂ = 2V₁",
                    "V₁ = 4V₂"
                ],
                correct: 1,
                explanation: "For an ideal transformer: V₁/V₂ = N₁/N₂. If N₁ = 2N₂, then V₁ = 2V₂. The voltage ratio equals the turns ratio."
            },
            {
                chapter: 7,
                question: "What is the magnetic energy density in a magnetic field?",
                options: [
                    "wₘ = μH²",
                    "wₘ = ½μH²",
                    "wₘ = μH",
                    "wₘ = ½μB²"
                ],
                correct: 1,
                explanation: "The magnetic energy density (energy per unit volume) is wₘ = ½μH² = ½BH. This is analogous to electric energy density wₑ = ½εE²."
            },
            {
                chapter: 7,
                question: "The continuity equation ∇ · J = -∂ρᵥ/∂t represents:",
                options: [
                    "Faraday's law of induction",
                    "Conservation of charge",
                    "Ohm's law",
                    "Conservation of energy"
                ],
                correct: 1,
                explanation: "The continuity equation expresses conservation of charge: the total current flowing out of a volume equals the rate of decrease of charge enclosed. In steady state (∇ · J = 0), this leads to Kirchhoff's Current Law."
            },
            {
                chapter: 7,
                question: "The Poynting vector S = E × H represents:",
                options: [
                    "The electric field strength",
                    "The power density (W/m²) flowing through a surface",
                    "The magnetic flux",
                    "The charge density"
                ],
                correct: 1,
                explanation: "The Poynting vector represents electromagnetic power density (power per unit area in W/m²). Its direction indicates the direction of energy flow or wave propagation."
            },
            {
                chapter: 7,
                question: "Inductance L is defined as:",
                options: [
                    "The ratio of voltage to current",
                    "The ratio of magnetic flux linkage to current",
                    "The ratio of magnetic field to current density",
                    "The rate of change of magnetic flux"
                ],
                correct: 1,
                explanation: "Inductance is L = Λ/I, where Λ is the magnetic flux linkage and I is the current. For a solenoid: L = μ(N²/l)S."
            },
            {
                chapter: 1,
                question: "Which theorem converts a closed line integral into a surface integral?",
                options: [
                    "Divergence Theorem",
                    "Stokes' Theorem",
                    "Gauss's Theorem",
                    "Green's Theorem"
                ],
                correct: 1,
                explanation: "Stokes' Theorem: ∮ₗ E · dl = ∫ₛ (∇ × E) · ds. It converts a closed line integral around a path into a surface integral over the area bounded by that path."
            },
            {
                chapter: 2,
                question: "The electric field intensity E has units of:",
                options: [
                    "Volts or Joules/Coulomb",
                    "N/C or V/m",
                    "Coulombs/meter²",
                    "Watts/meter"
                ],
                correct: 1,
                explanation: "Electric field E = F/q has units of force per charge (N/C) or equivalently voltage per distance (V/m). Both are dimensionally equivalent."
            },
            {
                chapter: 3,
                question: "The electrostatic potential energy is path independent because:",
                options: [
                    "Electric fields are always uniform",
                    "The electric field is a conservative field",
                    "Charges repel each other",
                    "It only applies in vacuum"
                ],
                correct: 1,
                explanation: "The electric field is conservative, meaning the work done (and thus potential difference) between two points is independent of the path taken. This allows us to define a unique potential at each point."
            },
            {
                chapter: 4,
                question: "The magnetic dipole moment of a current loop is given by:",
                options: [
                    "m = I/A",
                    "m = AI n̂",
                    "m = A/I",
                    "m = BI n̂"
                ],
                correct: 1,
                explanation: "The magnetic dipole moment is m = AI n̂, where A is the loop area, I is the current, and n̂ is the unit normal vector to the loop. This quantity is used in calculating torque: T = m × B."
            },
            {
                chapter: 5,
                question: "The Ampère-Maxwell Law adds which term to the original Ampère's Law?",
                options: [
                    "∂B/∂t",
                    "∂D/∂t (displacement current)",
                    "∂E/∂t",
                    "∂H/∂t"
                ],
                correct: 1,
                explanation: "Maxwell added the displacement current term ∂D/∂t to Ampère's Law: ∇ × H = J + ∂D/∂t. This term accounts for the magnetic field created by changing electric fields, not just by current flow."
            },
            {
                chapter: 1,
                question: "In spherical coordinates, what is the range of the polar angle θ?",
                options: [
                    "0 ≤ θ < 2π",
                    "0 ≤ θ ≤ π",
                    "-π ≤ θ ≤ π",
                    "0 ≤ θ < π/2"
                ],
                correct: 1,
                explanation: "In spherical coordinates (R, θ, φ), the polar angle θ ranges from 0 to π (0 to 180°), measured from the positive z-axis. The azimuthal angle φ ranges from 0 to 2π."
            },
            {
                chapter: 3,
                question: "Poisson's equation is used when:",
                options: [
                    "There are no charges in the region",
                    "There are charges present in the region (ρᵥ ≠ 0)",
                    "The field is time-varying",
                    "Only magnetic fields are present"
                ],
                correct: 1,
                explanation: "Poisson's equation ∇²V = -ρᵥ/ε is used in regions where charge density exists. When ρᵥ = 0 (charge-free regions), it simplifies to Laplace's equation: ∇²V = 0."
            },
            {
                chapter: 4,
                question: "For an infinite straight wire carrying current I, the magnetic field at distance R is:",
                options: [
                    "B = μ₀I/πR",
                    "B = μ₀I/(2πR)",
                    "B = μ₀I/R²",
                    "B = 2μ₀I/R"
                ],
                correct: 1,
                explanation: "For an infinite wire: B = μ₀I/(2πR) in the φ direction (circular around the wire). This is derived using Ampère's Law with cylindrical symmetry."
            },
            {
                chapter: 7,
                question: "For an ideal transformer, if N₁/N₂ = 4, what is the current ratio I₁/I₂?",
                options: [
                    "I₁/I₂ = 4",
                    "I₁/I₂ = 1/4",
                    "I₁/I₂ = 2",
                    "I₁/I₂ = 16"
                ],
                correct: 1,
                explanation: "For an ideal transformer, the current ratio is the inverse of the voltage/turns ratio: I₁/I₂ = N₂/N₁. If N₁/N₂ = 4, then I₁/I₂ = 1/4. Power is conserved: V₁I₁ = V₂I₂."
            },
            {
                chapter: 2,
                question: "What is the relationship between displacement field D and electric field E in a linear isotropic medium?",
                options: [
                    "D = E",
                    "D = εE",
                    "E = εD",
                    "D = ε₀E + P where P is independent of E"
                ],
                correct: 1,
                explanation: "In a linear isotropic material, D = εE where ε is the permittivity of the medium. This can also be written as D = ε₀E + P where P = χₑε₀E is the polarization."
            }
        ];

        let currentChapter = null;
        let currentQuizMode = null;
        let currentQuestionIndex = 0;
        let score = 0;
        let quizAnswers = [];
        let currentQuestions = [];

        function initializeApp() {
            renderChapters();
        }

        function renderChapters() {
            const grid = document.getElementById('chapter-grid');
            grid.innerHTML = chapters.map(chapter => `
                <div class="chapter-card" onclick="openChapter(${chapter.number})">
                    <div class="chapter-number">Chapter ${chapter.number}</div>
                    <div class="chapter-title">${chapter.title}</div>
                    <div class="chapter-topics">${chapter.topics}</div>
                </div>
            `).join('');
        }

        function switchTab(tab) {
            document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
            document.querySelectorAll('.content-section').forEach(section => section.classList.remove('active'));
            
            event.target.classList.add('active');
            document.getElementById(`${tab}-section`).classList.add('active');

            if (tab === 'quiz') {
                document.getElementById('quiz-container').innerHTML = '';
            }
            if (tab === 'comprehensive') {
                document.getElementById('comprehensive-quiz-container').innerHTML = '';
            }
        }

        function openChapter(chapterNum) {
            const chapter = chapters.find(c => c.number === chapterNum);
            const modal = document.getElementById('modal');
            const modalBody = document.getElementById('modal-body');
            
            modalBody.innerHTML = chapter.content;
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeModal() {
            document.getElementById('modal').classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        function startQuiz(mode) {
            currentQuizMode = mode;
            
            if (mode === 'targeted') {
                showChapterSelection();
            } else {
                currentQuestions = shuffleArray([...quizQuestions]).slice(0, 15);
                currentQuestionIndex = 0;
                score = 0;
                quizAnswers = [];
                renderQuiz();
            }
        }

        function showChapterSelection() {
            const container = document.getElementById('quiz-container');
            container.innerHTML = `
                <div class="quiz-header">
                    <h2>Select a Chapter</h2>
                    <p>Choose which chapter you want to practice</p>
                </div>
                <div class="chapter-grid">
                    ${chapters.map(chapter => `
                        <div class="chapter-card" onclick="startChapterQuiz(${chapter.number})">
                            <div class="chapter-number">Chapter ${chapter.number}</div>
                            <div class="chapter-title">${chapter.title}</div>
                        </div>
                    `).join('')}
                </div>
            `;
        }

        function startChapterQuiz(chapterNum) {
            const chapterQuestions = quizQuestions.filter(q => q.chapter === chapterNum);
            currentQuestions = shuffleArray(chapterQuestions);
            currentQuestionIndex = 0;
            score = 0;
            quizAnswers = [];
            renderQuiz();
        }

        function startComprehensiveTest() {
            const container = document.getElementById('comprehensive-quiz-container');
            currentQuestions = shuffleArray([...quizQuestions]).slice(0, 30);
            currentQuestionIndex = 0;
            score = 0;
            quizAnswers = [];
            renderComprehensiveQuiz();
        }

        function renderQuiz() {
            const container = document.getElementById('quiz-container');
            const question = currentQuestions[currentQuestionIndex];
            const progress = ((currentQuestionIndex) / currentQuestions.length) * 100;

            container.innerHTML = `
                <div class="quiz-header">
                    <h2>Question ${currentQuestionIndex + 1} of ${currentQuestions.length}</h2>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${progress}%"></div>
                    </div>
                </div>
                <div class="question-card">
                    <div class="question-text">${question.question}</div>
                    <div class="options">
                        ${question.options.map((option, index) => `
                            <div class="option" onclick="selectOption(${index})" id="option-${index}">
                                ${option}
                            </div>
                        `).join('')}
                    </div>
                    <div id="feedback"></div>
                </div>
                <div class="quiz-controls">
                    <button class="btn" onclick="previousQuestion()" ${currentQuestionIndex === 0 ? 'disabled' : ''}>Previous</button>
                    <button class="btn btn-primary" onclick="checkAnswer()" id="check-btn" disabled>Check Answer</button>
                </div>
            `;
        }

        function renderComprehensiveQuiz() {
            const container = document.getElementById('comprehensive-quiz-container');
            const question = currentQuestions[currentQuestionIndex];
            const progress = ((currentQuestionIndex) / currentQuestions.length) * 100;

            container.innerHTML = `
                <div class="quiz-header">
                    <h2>Question ${currentQuestionIndex + 1} of ${currentQuestions.length}</h2>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${progress}%"></div>
                    </div>
                </div>
                <div class="question-card">
                    <div class="question-text">${question.question}</div>
                    <div class="options">
                        ${question.options.map((option, index) => `
                            <div class="option" onclick="selectOption(${index})" id="option-${index}">
                                ${option}
                            </div>
                        `).join('')}
                    </div>
                    <div id="feedback"></div>
                </div>
                <div class="quiz-controls">
                    <button class="btn" onclick="previousQuestion()" ${currentQuestionIndex === 0 ? 'disabled' : ''}>Previous</button>
                    <button class="btn btn-primary" onclick="checkAnswer()" id="check-btn" disabled>Check Answer</button>
                </div>
            `;
        }

        let selectedAnswer = null;

        function selectOption(index) {
            if (quizAnswers[currentQuestionIndex] !== undefined) return;
            
            document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
            document.getElementById(`option-${index}`).classList.add('selected');
            selectedAnswer = index;
            document.getElementById('check-btn').disabled = false;
        }

        function checkAnswer() {
            const question = currentQuestions[currentQuestionIndex];
            const isCorrect = selectedAnswer === question.correct;
            
            quizAnswers[currentQuestionIndex] = {
                selected: selectedAnswer,
                correct: question.correct,
                isCorrect: isCorrect
            };

            if (isCorrect) score++;

            document.querySelectorAll('.option').forEach((opt, idx) => {
                opt.classList.add('disabled');
                if (idx === question.correct) {
                    opt.classList.add('correct');
                } else if (idx === selectedAnswer) {
                    opt.classList.add('incorrect');
                }
            });

            const feedback = document.getElementById('feedback');
            feedback.className = `feedback ${isCorrect ? 'correct' : 'incorrect'}`;
            feedback.innerHTML = `
                <strong>${isCorrect ? 'correct' : 'incorrect'}</strong><br>
                ${question.explanation}
            `;

            const checkBtn = document.getElementById('check-btn');
            checkBtn.textContent = currentQuestionIndex === currentQuestions.length - 1 ? 'view results' : 'next';
            checkBtn.onclick = nextQuestion;
            checkBtn.disabled = false;
        }

        function nextQuestion() {
            if (currentQuestionIndex === currentQuestions.length - 1) {
                showResults();
            } else {
                currentQuestionIndex++;
                selectedAnswer = null;
                if (document.getElementById('comprehensive-quiz-container').innerHTML) {
                    renderComprehensiveQuiz();
                } else {
                    renderQuiz();
                }
            }
        }

        function previousQuestion() {
            if (currentQuestionIndex > 0) {
                currentQuestionIndex--;
                selectedAnswer = quizAnswers[currentQuestionIndex]?.selected;
                if (document.getElementById('comprehensive-quiz-container').innerHTML) {
                    renderComprehensiveQuiz();
                } else {
                    renderQuiz();
                }
                
                if (quizAnswers[currentQuestionIndex]) {
                    const question = currentQuestions[currentQuestionIndex];
                    const answer = quizAnswers[currentQuestionIndex];
                    
                    setTimeout(() => {
                        document.getElementById(`option-${answer.selected}`).classList.add('selected');
                        document.querySelectorAll('.option').forEach((opt, idx) => {
                            opt.classList.add('disabled');
                            if (idx === question.correct) {
                                opt.classList.add('correct');
                            } else if (idx === answer.selected) {
                                opt.classList.add('incorrect');
                            }
                        });

                        const feedback = document.getElementById('feedback');
                        feedback.className = `feedback ${answer.isCorrect ? 'correct' : 'incorrect'}`;
                        feedback.innerHTML = `
                            <strong>${answer.isCorrect ? 'correct' : 'incorrect'}</strong><br>
                            ${question.explanation}
                        `;

                        const checkBtn = document.getElementById('check-btn');
                        checkBtn.textContent = currentQuestionIndex === currentQuestions.length - 1 ? 'view results' : 'next';
                        checkBtn.onclick = nextQuestion;
                    }, 50);
                }
            }
        }

        function showResults() {
            const percentage = Math.round((score / currentQuestions.length) * 100);
            let message = '';
            
            if (percentage >= 90) {
                message = 'A';
            } else if (percentage >= 80) {
                message = 'A-';
            } else if (percentage >= 70) {
                message = 'B';
            } else if (percentage >= 60) {
                message = 'C';
            } else {
                message = 'Lock in 🥀';
            }

            const chapterBreakdown = {};
            currentQuestions.forEach((q, idx) => {
                if (!chapterBreakdown[q.chapter]) {
                    chapterBreakdown[q.chapter] = { correct: 0, total: 0 };
                }
                chapterBreakdown[q.chapter].total++;
                if (quizAnswers[idx]?.isCorrect) {
                    chapterBreakdown[q.chapter].correct++;
                }
            });

            const container = document.getElementById('comprehensive-quiz-container').innerHTML ? 
                document.getElementById('comprehensive-quiz-container') : 
                document.getElementById('quiz-container');

            container.innerHTML = `
                <div class="results-screen">
                    <h2>Quiz Complete</h2>
                    <div class="score-display">${percentage}%</div>
                    <p class="performance-message">${message}</p>
                    <p>You scored ${score} out of ${currentQuestions.length} questions</p>
                    
                    <div class="results-breakdown">
                        <h3 style="margin-bottom: 1rem;">Performance by Chapter</h3>
                        ${Object.entries(chapterBreakdown).map(([chapter, data]) => {
                            const chapterInfo = chapters.find(c => c.number === parseInt(chapter));
                            const chapterPercentage = Math.round((data.correct / data.total) * 100);
                            return `
                                <div class="topic-score">
                                    <span>${chapterInfo.title}</span>
                                    <span>${data.correct}/${data.total} (${chapterPercentage}%)</span>
                                </div>
                            `;
                        }).join('')}
                    </div>

                    <div style="display: flex; gap: 1rem; justify-content: center; margin-top: 2rem; flex-wrap: wrap;">
                        <button class="btn btn-primary" onclick="retakeQuiz()">Retake Quiz</button>
                        <button class="btn" onclick="switchTab('study')">Review Material</button>
                    </div>
                </div>
            `;
        }

        function retakeQuiz() {
            if (document.getElementById('comprehensive-quiz-container').innerHTML) {
                startComprehensiveTest();
            } else if (currentQuizMode === 'targeted') {
                showChapterSelection();
            } else {
                startQuiz('random');
            }
        }

        function shuffleArray(array) {
            const newArray = [...array];
            for (let i = newArray.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
            }
            return newArray;
        }

        document.addEventListener('DOMContentLoaded', initializeApp);

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeModal();
            }
        });