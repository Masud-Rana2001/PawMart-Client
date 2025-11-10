import React from 'react';
import { FaPaw, FaHandHoldingHeart, FaStethoscope } from 'react-icons/fa';

const AdoptAwareness = () => {
    return (
        <section className="py-16 bg-gradient-to-r from-sky-200 via-cyan-300 to-sky-400 
           dark:from-sky-900 dark:via-sky-950 dark:to-cyan-950 transition-colors duration-300">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-emerald-700 dark:text-amber-400 mb-10">
                    Why Adopt from PawMart?
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-10">
                    Choosing adoption means choosing compassion. You're not just getting a pet; you're gaining a loyal family member and saving a life.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                    {/* Feature 1: Give a Second Chance */}
                    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-xl border-t-4 border-emerald-500">
                        <FaHandHoldingHeart size={40} className="text-emerald-500 mb-4" />
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">A Second Chance</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            Give a deserving pet a safe, loving forever home. Every adoption opens up space for another rescue animal in need.
                        </p>
                    </div>

                    {/* Feature 2: Support a Cause */}
                    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-xl border-t-4 border-orange-500">
                        <FaPaw size={40} className="text-orange-500 mb-4" />
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Support Local Rescue</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            Adoption fees go directly back into the PawMart community to support vet care, food, and shelter for other animals.
                        </p>
                    </div>

                    {/* Feature 3: Ready for Home */}
                    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-xl border-t-4 border-indigo-500">
                        <FaStethoscope size={40} className="text-indigo-500 mb-4" />
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Healthy & Happy</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            All adoptable pets are screened, vaccinated, and often spayed/neutered, ensuring they are ready to thrive in your home.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdoptAwareness;