// TODO: Connect to Supabase backend
// Supabase table: unit_test_marks (columns: id, roll_no, subject, test_name, marks, max_marks, semester, uploaded_by, uploaded_at)

export interface Mark {
    id: string;
    roll_no: string;
    subject: string;
    test_name: string;
    marks: number;
    max_marks: number;
    semester: string;
    uploaded_by: string;
    uploaded_at: string;
}

/**
 * Fetch all unit test marks for a given student roll number.
 * TODO: Replace with Supabase query: supabase.from('unit_test_marks').select('*').eq('roll_no', rollNo)
 */
export async function fetchStudentMarks(rollNo: string): Promise<Mark[]> {
    // TODO: Connect to Supabase backend
    console.log("fetchStudentMarks called for:", rollNo);
    return [];
}

/**
 * Upload marks from a CSV file. CSV format: roll_no,subject,marks,semester
 * TODO: Parse CSV on server, insert rows into unit_test_marks table
 * TODO: Store CSV in Supabase Storage bucket: marks-uploads
 */
export async function uploadMarksCSV(
    file: File,
    teacherId: string,
    subject: string,
    testName: string
): Promise<{ success: boolean; message: string; rowsInserted?: number }> {
    // TODO: Connect to Supabase backend
    // 1. Upload file to storage: supabase.storage.from('marks-uploads').upload(path, file)
    // 2. Parse CSV rows on server-side API route
    // 3. Insert rows: supabase.from('unit_test_marks').insert(rows)
    console.log("uploadMarksCSV called:", file.name, teacherId, subject, testName);
    return { success: false, message: "TODO: Connect to Supabase backend" };
}

/**
 * Delete a mark entry by ID.
 * TODO: supabase.from('unit_test_marks').delete().eq('id', markId)
 */
export async function deleteMark(markId: string): Promise<void> {
    // TODO: Connect to Supabase backend
    console.log("deleteMark called:", markId);
}
